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
    const user = await User.find({ name: "Hannibal" });
    console.log(user);
  } catch (e) {
    console.log(e.message);
  }
}
run();
