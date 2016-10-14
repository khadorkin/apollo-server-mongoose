import mongoose from 'mongoose';
import { find, filter } from 'lodash';
import { pubsub } from './subscriptions';
import { Place } from './connectors';

const places = Place.find({},'id name address city votes', function (err, docs){
  console.log(docs.length);
});
// const authors = [
//   { id: 1, firstName: 'Tom', lastName: 'Coleman' },
//   { id: 2, firstName: 'Sashko', lastName: 'Stubailo' },
// ];

// const places = [
//   { id: 1, authorId: 1, title: 'Introduction to GraphQL', votes: 2 },
//   { id: 2, authorId: 2, title: 'GraphQL Rocks', votes: 3 },
//   { id: 3, authorId: 2, title: 'Advanced GraphQL', votes: 1 },
// ];

const resolveFunctions = {
  Query: {
    places() {
      return places;
    },
  },
  Mutation: {
    upvotePlace(_, { placeId }) {
      const place = find(places, { id: placeId });
      if (!place) {
        throw new Error(`Couldn't find place with id ${placeId}`);
      }
      place.votes += 1;
      pubsub.publish('placeUpvoted', place);
      return place;
    },
  },
  Subscription: {
    placeUpvoted(place) {
      return place;
    },
  }
  // ,
  // Author: {
  //   places(author) {
  //     return filter(places, { authorId: author.id });
  //   },
  // },
  // Place: {
  //   author(place) {
  //     return find(authors, { id: place.authorId });
  //   },
  // },
};

export default resolveFunctions;
