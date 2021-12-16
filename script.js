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
    const user = await User.create({
      name: "Hannibal",
      age: 18,
      hobbies: ["Soccer", "Bowling"],
      address: {
        street: "26 rue el habib",
        city: "Ariana",
      },
    });
  } catch (e) {
    console.log(e.message);
  }
}
run();
