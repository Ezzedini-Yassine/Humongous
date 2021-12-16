const mongoose = require("mongoose");
const User = require("./user");

mongoose.connect(
  "mongodb://localhost/testdb",
  () => {
    console.log("Connected");
  },
  (e) => console.log(e)
);

// save is an asynchronous function so we could use .then
// const user = new User({ name: "Yacine", age: 22 });
// user.save().then(() => console.log("user saved"));

// console.log(user);

async function run() {
  //const user = await User.create({ name: "Hannibal", age: 18})
  const user = new User({ name: "Toutou", age: 25 });
  await user.save();

  // modify user
  user.name = "Yassine";
  user.save();
  console.log(user);
}
run();
