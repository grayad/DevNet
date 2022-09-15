const { User } = require("../models");

const resolvers = {
  Query: {
    users: async () => {
      return User.find().select("-__v -password");
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);

      return { user };
    },
    // updateUser: async(parent, args) => {
    //     let updatedUser = await User.findByIdAndUpdate(

    //     )
    // }
  },
};

module.exports = resolvers;
