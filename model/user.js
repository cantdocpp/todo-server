const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcryptjs');

let userSchema = mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
})

userSchema.pre('save', function() {
  const saltRounds = 10;
  const myPlaintextPassword = this.password;
  var salt = bcrypt.genSaltSync(saltRounds);
  console.log('=============', myPlaintextPassword);
  var hash = bcrypt.hashSync(myPlaintextPassword, salt);
  this.password = hash;
})

let Users = mongoose.model('User', userSchema)

module.exports = Users
