export const roleTypeDef = `
  type Role {
    roleUuid: String!
    roleName: String!
    roleDescription: String!
  }
  input UserInput {
    role: {
      roleName: :String!
      roleDescription: :String!
    }
  }
`;
export const RoleQueries = `
  getRoles: [Role]!
  getRolebyUuid(role_uuid: String!): [Role]!
`;
export const RoleMutations = `
  addRole(role: RoleInput!): Role!
  updateRole(role_uuid: String!, role: RoleInput!): Role!
  deleteRole(role_uuid: String!): Role!
`;

export const microserviceTypeDef = `
  type Microservice {
    ms_uuid: String!
    ms_name: String!
    ms_description: String!
  }
  input MicroserviceInput {
    microservice: {
      ms_name: String!
      ms_description: String!
    }
  }
`;
export const MicroserviceQueries = `
  getMicroservices: [Microservice]!
  getMicroservicebyUuid(ms_uuid: String!): [Microservice]!
`;
export const MicroserviceMutations = `
  addMicroservice(microservice: MicroserviceInput!): Microservice!
  updateMicroservice(ms_uuid: String!, microservice: MicroserviceInput!): Microservice!
  deleteMicroservice(ms_uuid: String!): Microservice!
`;

export const requestTypeDef = `
  type Request {
    request_uuid: String!
    ms_uuid: String!
    request_type: String!
    description: String!
  }
  input RequestInput {
    request: {
      ms_uuid: String!
      request_type: String!
      description: String!
    }
  }
`;
export const RequestQueries = `
  getRequests: [Request]!
  getRequestbyUuid(request_uuid: String!): [Request]!
`;
export const RequestMutations = `
  addRequest(request: RequestInput!): Request!
  updateRequest(request_uuid: String!, request: RequestInput!): Request!
  deleteRequest(request_uuid: String!): Request!
`;

export const permissionTypeDef = `
  type Permission {
    permission_uuid: String!
    permission_uuid: String!
    request_uuid: String!
  }
  input PermissionInput {
    permission{
      role_uuid: String!
      request_uuid: String!
    }
  }
`;
export const PermissionQueries = `
  getPermissions: [Permission]!
  getPermissionbyUuid(permission_uuid: String!): [Permission]!
`;
export const PermissionMutations = `
  addPermission(permission: PermissionInput!): Permission!
  updatePermission(permission_uuid: String!, permission: PermissionInput!): Permission!
  deletePermission(permission_uuid: String!): Permission!
`;
