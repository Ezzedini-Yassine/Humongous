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
    //add bestfriend to a user, "look at schema, bestfriend is ref of user"
    const user = await User.where("age")
      .equals(18)
      .lt(35)
      .where("name")
      .equals("Diego")
      .limit(2)
      .select("age");
    //here, we are retriving a table of users from previous query
    //now we will add a bestfriend to user 1 from that table of returned users
    //PS: if you are having a fresh DB this wont work cause user doesnt exist
    user[0].bestFriend = "61bbb68be783ff36bcb91632";
    await user[0].save();
    console.log(user);
  } catch (e) {
    console.log(e.message);
  }
}
run();
