import merge from 'lodash.merge';
import GraphQLJSON from 'graphql-type-json';
import { makeExecutableSchema } from 'graphql-tools';

import { mergeSchemas } from './utilities';

import { //User
	userTypeDef,
	userQueries,	
	userMutations,
} from './dayscool/users/typeDefs';

import{ //Messages
	conversationTypeDef,
	conversationQueries,
	conversationMutations,
	messageTypeDef
} from './dayscool/messages/typeDefs';

import { // ABAC
	roleTypeDef,
	microserviceTypeDef,
	requestTypeDef,
	permissionTypeDef,
	roleQueries,
	roleMutations,
	microserviceQueries,
	microserviceMutations,
	requestQueries,
	requestMutations,
	permissionQueries,
	permissionMutations
} from './dayscool/abac/typeDefs';

import { // Curso
	cursoTypeDef,
	reunionTypeDef,
	alumnosTypeDef,
	cursoQueries,
	cursoMutations
} from './dayscool/curso/typeDefs'

import userResolvers from './dayscool/users/resolvers';
import messageResolvers from './dayscool/messages/resolvers';
import abacResolvers from './dayscool/abac/resolvers';
import cursoResolvers from './dayscool/curso/resolvers'

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
		permissionTypeDef,
		cursoTypeDef,
		alumnosTypeDef,
		reunionTypeDef,
	],
	[
		userQueries,
		conversationQueries,
		roleQueries,
		microserviceQueries,
		requestQueries,
		permissionQueries,
		cursoQueries,
	],
	[	
		userMutations,
		conversationMutations,
		roleMutations,
		microserviceMutations,
		requestMutations,
		permissionMutations,
		cursoMutations,
	]
);

// Generate the schema object from your types definition.
export default makeExecutableSchema({
	typeDefs: mergedTypeDefs,
	resolvers: merge(
		{ JSON: GraphQLJSON }, // allows scalar JSON
		userResolvers,
		messageResolvers,
		abacResolvers,
		cursoResolvers
	)
});
