const express = require('express');
const { ApolloServer } = require('@apollo/server');

const { expressMiddleware } = require('@apollo/server/express4');
// const { authMiddleware } = require('./utils/auth');
const path = require('path');

const db = require('./config/connection');
// const { typeDefs, resolvers } = require("./schemas");

const PORT = process.env.PORT || 3001;
const app = express();
// const server = new ApolloServer({
//     typeDefs,
//     resolvers
// });


app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})