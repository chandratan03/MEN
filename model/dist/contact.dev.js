"use strict";

var mongoose = require('mongoose'); // schema


var contactSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});
var Contact = module.exports = mongoose.model("contact", contactSchema);

module.exports.get = function (callback, limit) {
  Contact.find(callback).limit(limit);
};