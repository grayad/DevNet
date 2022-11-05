const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, "Must use a valid email address"],
    },
    password: {
      type: String,
      required: true,
      minlength: 5,
    },
    type: {
      type: String,
      required: true,
    },
    title: {
      type: String,
    },
    bio: {
      type: String,
      maxlength: 280,
    },
    // empty array where skill inputs will be pushed
    skills: [],
    // Array of _id values referencing the User model (self-reference)
    connections: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  // set this to use virtual below
  {
    toJSON: {
      virtuals: true,
    },
  }
);

// hash user password
userSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// custom method to compare and validate password for logging in
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

// when a user is queried, the query will also return another field called `skillsCount` with the number of skills the user has
userSchema.virtual("skillsCount").get(function () {
  return this.skills.length;
});

// retrieves length of connections array on query-- # of connections
userSchema.virtual("connectionCount").get(function () {
  return this.connections.length;
});

const User = model("User", userSchema);

module.exports = User;
