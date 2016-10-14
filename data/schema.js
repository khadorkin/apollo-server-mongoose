import { makeExecutableSchema } from 'graphql-tools';

import resolvers from './resolvers';

const schema = `

type Place {
  id: Int!
  name: String
  address: String
  city: String
  votes: Int!
}

# the schema allows the following query:
type Query {
  places: [Place]
}

# this schema allows the following mutation:
type Mutation {
  upvotePlace (
    placeId: Int!
  ): Place
}

type Subscription {
  placeUpvoted: Place
}

`;

export default makeExecutableSchema({
  typeDefs: schema,
  resolvers
});

// // type Author {
//   id: Int! # the ! means that every author object _must_ have an id
//   firstName: String
//   lastName: String
//   places: [Place] # the list of Places by this author
// }