import { generalRequest, getRequest } from '../../utilities';
//Añadir la url correspondiente a su microservicio
const URL1 = `http://172.17.0.1:4000/conversations`;
const URL2 = `http://172.17.0.1:8080/ms_user/users`;
const ULRABAC = `http://35.208.121.159:80/api`;


const resolvers = {
//Añadir las definiciones por url de las request
	Query: {
		// Users
		getAllUsers: (_) =>
			getRequest(URL2, ''),
		getUserById: (_, { id }) =>
			generalRequest(`${URL2}/${id}`, 'GET'),
		// Messages
		allConversations: (_, { id }) =>
			getRequest(`${URL1}/${idUs}`, 'GET'),
		getMessagesbyConversation: (_, { idUs, idConv}) =>
			generalRequest(`${URL1}/${idUs}/${idConv}`, 'GET'),
	},
	Mutation: {
		// Users
		createUser: (_, { user }) =>
			generalRequest(`${URL2}/testcreate`, 'POST', user),
		updateUser: (_, { id, user }) =>
			generalRequest(`${URL2}/${id}`, 'PUT', user),
		deleteUser: (_, { id }) =>
			generalRequest(`${URL2}/${id}`, 'DELETE'),
		// Messages
		createConversation: (_, { idUs, category }) =>
			generalRequest(`${URL1}/${idUs}`, 'POST', conversation),
		createMessage: (_, { idUs,idConv, message }) =>
			generalRequest(`${URL1}/${idUs}/${idConv}`, 'POST', message),
		deleteConversation: (_, { idUs, idConv}) =>
			generalRequest(`${URL1}/${idUs}/${idConv}`, 'DELETE'),
		deleteMessage: (_, { idUs, idConv, idMsg}) =>
			generalRequest(`${URL1}/${idUs}/${idConv}/${idMsg}`, 'DELETE'),
		// ABAC
		
	}
};

export default resolvers;