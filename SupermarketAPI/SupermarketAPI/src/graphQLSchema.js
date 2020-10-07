import merge from 'lodash.merge';
import GraphQLJSON from 'graphql-type-json';
import { makeExecutableSchema } from 'graphql-tools';

import { mergeSchemas } from './utilities';

import {
	// Users
	userTypeDef,
	userQueries,	
	userMutations,
	// Messages
	conversationTypeDef,
	conversationQueries,
	conversationMutations,
	messageTypeDef
} from './supermarket/categories/typeDefs';

import { // ABAC
	roleTypeDef,
	microserviceTypeDef,
	requestTypeDef,
	permissionTypeDef,
	RoleQueries,
	RoleMutations,
	MicroserviceQueries,
	MicroserviceMutations,
	RequestQueries,
	RequestMutations,
	PermissionQueries,
	PermissionMutations
} from './supermarket/abac/typeDefs';

import msResolvers from './supermarket/categories/resolvers';
import abacResolver from './supermarket/abac/resolvers';

// merge the typeDefs
const mergedTypeDefs = mergeSchemas(
	[
		'scalar JSON',
		userTypeDef,
		conversationTypeDef,
		messageTypeDef,
		roleTypeDef,
		microserviceTypeDef,
		requestTypeDef,
		permissionTypeDef
	],
	[
		userQueries,
		conversationQueries,
		RoleQueries,
		MicroserviceQueries,
		RequestQueries,
		PermissionQueries
	],
	[	
		userMutations,
		conversationMutations,
		RoleMutations,
		MicroserviceMutations,
		RequestMutations,
		PermissionMutations
	]
);

// Generate the schema object from your types definition.
export default makeExecutableSchema({
	typeDefs: mergedTypeDefs,
	resolvers: merge(
		{ JSON: GraphQLJSON }, // allows scalar JSON
		msResolvers,
		abacResolver
	)
});
