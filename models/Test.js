const mongoose = require('mongoose');

const TestSchema = mongoose.Schema({
  name: String,
  age: Number,
  phone: { type: String, maxLength: 10, unique: true },
});

module.exports = mongoose.model('test', TestSchema);
