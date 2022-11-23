const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 2,
    maxlength: 30,
    required: true,
  },
  about: {
    type: String,
    minlength: 2,
    maxlength: 30,
    required: true,
  },
  avatar: {
    type: String,
    required: true,
    validate: {
      validator: function (v) {
        return /(http|https)\:\/\/[\da-z.-]+\.(com|co.il)[\/a-z]*/.test(v);
      },
      message: (props) => `${props.value} is not a valid link!`,
    },
  },
});

module.exports = mongoose.model("user", userSchema);
