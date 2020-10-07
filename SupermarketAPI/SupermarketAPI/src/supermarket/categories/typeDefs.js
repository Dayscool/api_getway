// Definir el objeto que van a usar y los campos necesarios para crearlo
export const userTypeDef = `
  type User {
      id: Int!
      username: String!
      mail: String!
      birthDate: String!
      career: String!
      role: String!
      name: String!
      password: String!
  }
  input UserInput {
      username: String!
      mail: String!
      birthDate: String!
      career: String!
      role: String!
      name: String!
      password: String!
  }`;

//Definir las consultas del objeto (solo GET)
export const userQueries = `
      getAllUsers: [User]!
      getUserById(id:Int!): User!
  `;
//Definir las mutaciones (POST PUT Y DELETE) 
export const userMutations = `
    createUser(user: UserInput!): User!
    updateUser(id: Int!, user: UserInput!): User!
    deleteUser(id: Int!): String!
`;

//Repetir para cada entidad
export const conversationTypeDef = `
  type Conversation {
      id: Int!
      usuario1Id: Int!
      usuario2Id: Int!
  }
  input ConversationInput {
      usuario1Id: Int!
      usuario2Id: Int!
  }`;

export const messageTypeDef = `
  type Message {
      id: Int!
      conversationId: Int!
      text: String!
      sendDate: String!
      remitenteId: Int!
  }
  input MessageInput {
      conversationId: Int!
      text: String!
      sendDate: String!
      remitenteId: Int!
  }`;

export const conversationQueries = `
  allConversations(idUs:Int!): [Conversation]!
  getMessagesbyConversation(idUs: Int!,idConv: Int!): [Message]!
`;

export const conversationMutations = `
  createConversation(idUs: Int!,conversation: ConversationInput!): Conversation!
  createMessage(idUs: Int!,idConv: Int!, message: MessageInput!): Message!
  deleteConversation(idUs: Int!,idConv: Int!): Int
  deleteMessage(idUs: Int!,idConv: Int!, isMsg: Int!): Int
`;
