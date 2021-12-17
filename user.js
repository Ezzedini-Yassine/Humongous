const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
  street: String,
  city: String,
});

const userSchema = new mongoose.Schema({
  name: String,
  age: {
    type: Number,
    min: 1,
    max: 100,
    //validators will only run with create or save method
    //there are other methods i can use like findOneAndUpdate, updateOne, updateMany
    //those do not go through validation which is why it's not recommended to
    //use these methods, just do normal: findById or findOne, get your user
    //then call save on your user, if you use the others it will skip your validations
    validate: {
      validator: (v) => v % 2 === 0,
      message: (props) => `${props.value} is not an even number`,
    },
  },
  email: {
    type: String,
    minlength: 10,
    lowercase: true,
  },
  createdAt: {
    type: Date,
    // immutible makes whatever value in unchangeable.
    immutible: true,
    default: () => Date.now(),
  },
  updatedAt: {
    type: Date,
    default: () => Date.now(),
  },
  bestFriend: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User",
  },
  hobbies: [String],
  address: addressSchema,
});

//we can add methods to each instance of our users
//must use normal function cause we using this keyword
userSchema.methods.sayHi = function () {
  console.log(`Hi, My name is ${this.name}`);
};

//i want this to return only, no chaineable stuff
userSchema.statics.findByName = function (name) {
  return this.find({ name: new RegExp(name, "i") });
};

//this will be chaineable with the query
userSchema.query.byName = function (name) {
  return this.where({ name: new RegExp(name, "i") });
};

module.exports = mongoose.model("User", userSchema);
