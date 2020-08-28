let express = require('express');
let mongoose = require('mongoose');
let bodyParser = require("body-parser");


let app = express();
app.use(bodyParser.urlencoded({
    extended: true,
}));
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost/resttest", {
    useNewUrlParser:true
})


var db = mongoose.connection;

if(!db)
    console.log("Fail connect to db")
else{
    console.log("Success connect to db")
}



var port = process.env.PORT || 8080;

app.get("/", (req, res)=> res.send("Hello with express"));


let apiRoutes =  require('./api-routes');

app.use('/api', apiRoutes)

app.listen(port, ()=>{
    console.log(`running in ${port}`);
})



// make install nodemon, to help every changes code from the js, doesnt need to restart the express server manually.

// if you haven't installed
//npm install -g nodemon

// already isntall
// run the server command:
// nodemon index

