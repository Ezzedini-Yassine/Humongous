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
    //this works fine, as we said, since it's userSchema.query => chaineable
    //u can call it when u use .find(), .where()
    const user = await User.find().byName("diego");
    //----------------VS-------------------------
    //this wont work because it's statics, then unchaineable :)
    //const user = await User.find().findByName("diego");

    console.log(user);
  } catch (e) {
    console.log(e.message);
  }
}
run();
