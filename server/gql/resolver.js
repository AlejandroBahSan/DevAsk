// const { UserInputError } = require("apollo-server-express");
const userController = require("../controllers/user");
// const user = require("../models/user");

const resolvers = {
    Query: {
        // getUser: () => {
        //     userController.getUser()
        // }
        getUser: (_, { id, username }) => {
            return userController.getUser(id, username);
        }
    },

    Mutation: {
        register: (_, { input }) => {
            userController.register(input)
        },
        // 
        login: (_, { input }) => { return userController.login(input) }
    }
}

module.exports = resolvers