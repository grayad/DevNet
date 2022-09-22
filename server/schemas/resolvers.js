const { User, Job } = require("../models");
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id }).select(
          "-__v -password"
        );

        return userData;
      }
      throw new AuthenticationError("Not logged in!");
    },
    users: async () => {
      return User.find().select("-__v -password");
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).select("-__v -password");
    },
    jobs: async () => {
      return Job.find().select("-__v");
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);
      return { token, user };
    },
    updateUser: async (parent, args, context) => {
      // check for token
      if (context.user) {
        let updatedUser = await User.findByIdAndUpdate(
          { _id: context.user._id },
          { title: args.title, bio: args.bio, skills: args.skills },
          { new: true }
        );
        return updatedUser;
      }
      // if no token, user needs to login
      throw new AuthenticationError("Please log in or create an account!");
    },
    addJob: async (parent, args) => {
      const job = await Job.create(args);

      return job;
    },
    removeJob: async (parent, _id) => {
      const job = await Job.findOneAndDelete(_id)

      return job;
    }
  },
};

module.exports = resolvers;
