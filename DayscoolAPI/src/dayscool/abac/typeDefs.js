export const roleTypeDef = `
  type Role {
    roleUuid: String
    roleName: String
    roleDescription: String
  }
  input RoleInput {
    roleName: String
    roleDescription: String
  }`;
export const roleQueries = `
  getRoles: [Role]
  getRolebyUuid(role_uuid: String): Role
`;
export const roleMutations = `
  addRole(role: RoleInput): Role
  updateRole(role_uuid: String, role: RoleInput): Role
  deleteRole(role_uuid: String): Role
`;

export const microserviceTypeDef = `
  type Microservice {
    msUuid: String
    msName: String
    msDescription: String
  }
  input MicroserviceInput {
    msName: String
    msDescription: String
  }
`;
export const microserviceQueries = `
  getMicroservices: [Microservice]
  getMicroservicebyUuid(ms_uuid: String): [Microservice]
`;
export const microserviceMutations = `
  addMicroservice(microservice: MicroserviceInput): Microservice
  updateMicroservice(ms_uuid: String, microservice: MicroserviceInput): Microservice
  deleteMicroservice(ms_uuid: String): Microservice
`;

export const requestTypeDef = `
  type Request {
    requestUuid: String
    msUuid: String
    requestType: String
    description: String
  }
  input RequestInput {
    msUuid: String
    requestType: String
    description: String
  }
`;
export const requestQueries = `
  getRequests: [Request]
  getRequestbyUuid(request_uuid: String): [Request]
`;
export const requestMutations = `
  addRequest(request: RequestInput): Request
  updateRequest(request_uuid: String, request: RequestInput): Request
  deleteRequest(request_uuid: String): Request
`;

export const permissionTypeDef = `
  type Permission {
    permissionUuid: String
    permissionUuid: String
    requestUuid: String
  }
  input PermissionInput {
    roleUuid: String
    requestUuid: String
  }
`;
export const permissionQueries = `
  getPermissions: [Permission]
  getPermissionbyUuid(permission_uuid: String): [Permission]
`;
export const permissionMutations = `
  addPermission(permission: PermissionInput): Permission
  updatePermission(permission_uuid: String, permission: PermissionInput): Permission
  deletePermission(permission_uuid: String): Permission
`;
