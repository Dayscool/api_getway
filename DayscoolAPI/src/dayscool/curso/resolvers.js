import { generalRequest } from '../../utilities';
import {url, port, entryPoint} from './server';

const URL = `http://${url}:${port}/${entryPoint}`;

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


function get_cursos_estudiantes(id_estudiante) {
    //lista de los cursos del alumno
    var lista_cursos = await generalRequest(`${URL}/alumnos/${id_estudiante}`, 'GET');
    var cursos = []
    for(const cur in lista_cursos) {
        profe = await generalRequest(`${URL}/${cur.duenoid}`, 'GET');
        cursos.push({id = cur.Id, nombre = cur.nombre, profesor = profe.username});
    }
    return cursos
} 