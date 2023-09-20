const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
 name: {
  type: String,
  required: true,
 },

 role: {
  type: String,
  required: true,
 },
});

const User = mongoose.model("User", userSchema);

module.exports = User;



//  sudo  docker exec -it 33f5bce026d2 mongosh  -u  "root" -p "example"


