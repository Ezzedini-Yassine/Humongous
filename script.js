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
    // find user where age === 18 and name: Diego, limit 2, select the fields
    // you want to be returned
    const user = await User.where("age")
      .equals(18)
      .lt(35)
      .where("name")
      .equals("Diego")
      .limit(2)
      .select("hobbies");
    console.log(user);
  } catch (e) {
    console.log(e.message);
  }
}
run();
