"use strict";

var Contact = require('../model/contact');

exports.index = function (req, res) {
  Contact.get(function (err, contact) {
    if (err) {
      res.json({
        status: "error",
        message: "err"
      });
    } else {
      res.json({
        status: "index",
        message: "Got contacts",
        data: contact
      });
    }
  });
}; // using post man
// make sure using x-www-form-urlencoded


exports.add = function (req, res) {
  var contact = new Contact({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  });
  contact.save(function (err) {
    if (err) res.json(err);else res.json({
      message: "new contact added",
      data: contact
    });
  });
};

exports.update = function (req, res) {
  Contact.findById(req.params.contact_id, function (err, contact) {
    if (err) res.send(err);else {
      contact.name = req.body.name;
      contact.email = req.body.email;
      contact.password = req.body.password;
      contact.save(function (err) {
        if (err) res.json(err);else res.json({
          message: "contact updated",
          data: contact
        });
      });
    }
  });
};

exports["delete"] = function (req, res) {
  Contact.deleteOne({
    _id: req.params.contact_id
  }, function (err, contact) {
    if (err) {
      res.send(err);
    } else {
      res.json({
        status: "success",
        message: "Contact deleted Success"
      });
    }
  });
};