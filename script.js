const mongoose = require("mongoose");
const User = require("./user");

mongoose.connect(
  "mongodb://localhost/testdb",
  () => {
    console.log("Connected");
  },
  (e) => console.log(e)
);

//the syntax for the find method is confusing in mongoDB which means
//it's confusing in mongoose, which why mongoose implemented something
//named queries -> User.where(), it allows you to create your own query
//based on a bunch of helper methods

async function run() {
  try {
    //we can't use join properly in mongoDB so we use populate method
    //from mongoose
    const user = await User.where("age")
      .equals(18)
      .where("name")
      .equals("Diego")
      .limit(1)
      .populate("bestFriend");
    console.log(user);
  } catch (e) {
    console.log(e.message);
  }
}
run();
