import merge from 'lodash.merge';
import GraphQLJSON from 'graphql-type-json';
import { makeExecutableSchema } from 'graphql-tools';

import { mergeSchemas } from './utilities';

import {
	userTypeDef,
	userQueries,	
	userMutations,
	conversationTypeDef,
	conversationQueries,
	conversationMutations,
	messageTypeDef
} from './supermarket/categories/typeDefs';

import msResolvers from './supermarket/categories/resolvers';

// merge the typeDefs
const mergedTypeDefs = mergeSchemas(
	[
		'scalar JSON',
		userTypeDef,
		conversationTypeDef,
		messageTypeDef
	],
	[
		userQueries,
		conversationQueries
	],
	[	
		userMutations,
		conversationMutations
	]
);

// Generate the schema object from your types definition.
export default makeExecutableSchema({
	typeDefs: mergedTypeDefs,
	resolvers: merge(
		{ JSON: GraphQLJSON }, // allows scalar JSON
		msResolvers
	)
});
