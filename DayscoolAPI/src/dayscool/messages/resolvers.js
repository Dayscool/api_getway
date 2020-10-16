import { generalRequest } from '../../utilities';
//Añadir la url correspondiente a su microservicio
import { url, port, entryPoint } from './server';
const URL = `http://${url}:${port}/${entryPoint}`;


const resolvers = {
//Añadir las definiciones por url de las request
	Query: {
		allConversations: (_, { idUs }) =>
			generalRequest(`${URL}/${idUs}`, 'GET'),
		getMessagesbyConversation: (_, { idUs, idConv}) =>
			generalRequest(`${URL}/${idUs}/${idConv}`, 'GET'),
	},
	Mutation: {
		createConversation: (_, { idUs, conversation }) =>
			generalRequest(`${URL}/${idUs}`, 'POST', conversation),
		createMessage: (_, { idUs,idConv, message }) =>
			create_message(idUs, idConv, message),
		deleteConversation: (_, { idUs, idConv}) =>
			generalRequest(`${URL}/${idUs}/${idConv}`, 'DELETE'),
		deleteMessage: (_, { idUs, idConv, idMsg}) =>
			generalRequest(`${URL}/${idUs}/${idConv}/${idMsg}`, 'DELETE')
	}
};


async function rest_message(idUs, idConv, intext) {
	
    //Fecha actual para creación de mensaje y notificación
    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
	//QUERY Crear un mensaje con parametros
	let message = {
		conversationId: idConv,
		text: intext,
		sendDate: date,
		remitentId: idUs
	}
	return await generalRequest(`${URL}/${idUs}/${idConv}`, 'POST', message)
        .then(res => res.json())
        .then(data => {
            console.log(data.data.createMessage);
            return data.data.createMessage;
        });
}

async function crear_notificacion(idUs, idConv, text, idDestinatario) {
	var opts = {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: ""
	};

	var query = `mutation {
		createNotification(notification: {
			userId: ${idDestinatario},
			conversationId: ${idConv},
			message:"${text}",
			senderId: ${idUs}
			}) {
			userId
			conversationId
			message
			senderId
			}
			}`;
	opts["body"] = JSON.stringify({ query });
	//Crear la notificación
	await fetch(url_notification, opts)
		.then(res => res.json())
		.then(data => { console.log(data.data) });
}
async function create_message(idUs, idConv, text) {
	
    var message = await rest_message(idUs, idConv, text);
	//Variable para guardar el destinatario
    var idDestinatario = await generalRequest(`${URL}/${idUs}`, 'GET')
        .then(res => res.json())
        .then(data => {
            //Filtrar la respuesta a la conversación del mensaje que se creo
            let newArray = data.data.allConversations.filter(conversation => conversation.id === idConv);
            //Obtener el destinatario segun el ususario emisor del mensaje
            if (newArray[0].usuario1Id === idUs) {
                idDestinatario = newArray[0].usuario2Id;
            } else {
                idDestinatario = newArray[0].usuario1Id;
            }
            return idDestinatario
        });

    console.log(idDestinatario);
    await crear_notificacion(idUs, idConv, text, idDestinatario);
    return message;
}



export default resolvers;