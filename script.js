const mongoose = require("mongoose");
const user = require("./user");
const User = require("./user");

mongoose.connect(
  "mongodb://localhost/testdb",
  () => {
    console.log("Connected");
  },
  (e) => console.log(e)
);

async function run() {
  try {
    //use create if DB is empty
    const user = await User.findOne({
      name: "Maradona",
      age: 98,
      email: "test@test.com",
    });
    console.log(user);
    console.log(user.namedEmail);
  } catch (e) {
    console.log(e.message);
  }
}
run();
