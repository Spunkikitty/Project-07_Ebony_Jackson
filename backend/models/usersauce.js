const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const userSauceSchema = mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

userSauceSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSauceSchema);