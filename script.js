const mongoose = require("mongoose");
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
    const user = await User.findById("61bbb7a6819a4f35e2a59b59");
    console.log(user);
  } catch (e) {
    console.log(e.message);
  }
}
run();
