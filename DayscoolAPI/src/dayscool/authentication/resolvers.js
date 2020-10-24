import { generalRequest, getRequest } from "../../utilities";
import { url, port, entryPoint } from "./server";
//Añadir la url correspondiente a su microservicio
const URL = `http://${url}:${port}/${entryPoint}`;

const resolvers = {
  //Añadir las definiciones por url de las request
  Query: {
    getUserC: (_, { username, password }) =>
      generalRequest(`${URL}/users/${username}/${password}`, "GET"),
  },
  Mutation: {
    createUser2: (_, { user2 }) =>
      generalRequest(`${URL}/users`, "POST", user2),
  },
};

export default resolvers;
