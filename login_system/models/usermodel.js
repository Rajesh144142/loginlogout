const mongoose = require('mongoose');
// const jwt = require('jsonwebtoken');
// const Joi = require('joi');
// const passwordComplexity = require('joi-password-complexity');


const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please provide a unique username"],
    unique: true
  },
  password: {
    type: String,
    required: [true, "Please provide a password"],
    unique: false
  },
  email: {
    type: String,
    required: [true, "Please provide a unique email"],
    unique: true
  }
}, {
  timestamps: true
});

// UserSchema.methods.generateAuthToken = function() {
//   const token = jwt.sign({ _id: this._id }, secret, { expiresIn: "7d" });
//   return token;
// };

// const User = mongoose.model('User', UserSchema);

// const validate = (data) => {
//   const schema = Joi.object({
//     username: Joi.string().required().label('Username'),
//     email: Joi.string().required().label('Email'),
//     password: passwordComplexity.required().label('Password')
//   });

//   return schema.validate(data);
// };
const User = mongoose.model('User', UserSchema);


module.exports = User
