# Apollo Server with Mongoose and MongoDB

Example of Apollo Server Using Mongoose and MongoDB

This is a really simple GraphQL server that uses [Apollo Server](https://github.com/apollostack/apollo-server) and [GraphQL Tools](https://github.com/apollostack/graphql-tools) to serve a simple schema via
Mongoose and MongoDB.

The original [example](https://github.com/apolloastack/frontpage-server-mongoose) uses a simple in-memory database. This example will persist your votes in your MongoDB instance.


## Installation

Clone the repository and run `npm install`

```
git clone https://github.com/aarmand/frontpage-server-mongoose
cd frontpage-server-mongoose
npm install
```

## Starting the server

```
npm start
```

The server will run on port 8080. You can change this by editing `server.js`.
