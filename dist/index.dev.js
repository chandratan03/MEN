"use strict";

var express = require('express');

var mongoose = require('mongoose');

var bodyParser = require("body-parser");

var app = express();
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
mongoose.connect("mongodb://localhost/resttest", {
  useNewUrlParser: true
});
var db = mongoose.connection;
if (!db) console.log("Fail connect to db");else {
  console.log("Success connect to db");
}
var port = process.env.PORT || 8080;
app.get("/", function (req, res) {
  return res.send("Hello with express");
});

var apiRoutes = require('./api-routes');

app.use('/api', apiRoutes);
app.listen(port, function () {
  console.log("running in ".concat(port));
}); // make install nodemon, to help every changes code from the js, doesnt need to restart the express server manually.
// if you haven't installed
//npm install -g nodemon
// already isntall
// run the server command:
// nodemon index