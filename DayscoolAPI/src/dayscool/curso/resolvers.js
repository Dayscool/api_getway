import {generalRequest}  from '../../utilities';
import {url, port, entryPoint, url_user, port_user, entryPoint_user} from './server';

const URL = `http://${url}:${port}/${entryPoint}`;
const URL_USER = `http://${url_user}:${port_user}/${entryPoint_user}`
//const URL = `https://2c4d8ad7-c4e1-4015-b174-1457b0005dea.mock.pstmn.io`

const resolvers = {
    Query: {
        getCursoById: (_,{ id }) =>
            generalRequest(`${URL}/${id}`, 'GET'),
        getCursoStudentById: (_, {id}) =>
            get_cursos_estudiantes(id),
        getReunionsByStudentId: (_, {id}) =>
            generalRequest(`${URL}/reunion/student/${id}`, 'GET')
    },
    Mutation: {
        createCurso: (_, {curso}) =>
            generalRequest(`${URL}/crear`, 'POST', curso),
        createAlumnos: (_, {alumnos}) =>
            generalRequest(`${URL}/alumnos`, 'POST', alumnos),
        createReunion: (_, {reunion}) =>
            generalRequest(`${URL}/reunion`, 'POST', reunion),
        updateCurso: (_, {id, curso}) =>
            generalRequest(`${URL}/modificar/${id}`, 'PUT', curso)
    }
}

export default resolvers;


async function get_cursos_estudiantes(id_estudiante) {
    //lista de los cursos del alumno
    var lista_cursos = await generalRequest(`${URL}/alumnos/${id_estudiante}`, 'GET');
    console.log(lista_cursos)
    for (const cur in lista_cursos) {
        let profe = await generalRequest(`${URL_USER}/persona/${lista_cursos[cur].duenoid}`, 'GET');
        cursos.push({Id: lista_cursos[cur].Id, nombre : lista_cursos[cur].nombre, profesor : profe.username});
    }
    return cursos
} 