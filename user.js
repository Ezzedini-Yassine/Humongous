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
    immutible: true,
    default: () => Date.now(),
  },
  updatedAt: {
    type: Date,
    default: () => Date.now(),
  },
  bestFriend: mongoose.SchemaTypes.ObjectId,
  hobbies: [String],
  address: addressSchema,
});

module.exports = mongoose.model("User", userSchema);
