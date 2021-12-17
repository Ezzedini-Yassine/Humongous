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
    const user = await User.findOne({
      name: "Maradona",
      email: "test@test.com",
    });
    console.log(user);
    await user.save();
    console.log(user);
  } catch (e) {
    console.log(e.message);
  }
}
run();
