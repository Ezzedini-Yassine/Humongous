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
    // there is also deleteMany
    // the console log of user will return this: { deletedCount: 6 }
    const user = await User.deleteMany({ name: "Hannibal" });
    console.log(user);
  } catch (e) {
    console.log(e.message);
  }
}
run();
