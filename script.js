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
    const user = await User.findOne({ name: "Diego" });
    console.log(user);
    user.sayHi();
  } catch (e) {
    console.log(e.message);
  }
}
run();
