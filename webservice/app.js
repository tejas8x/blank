var express = require ("express");

var path = require ("path");

var mongoose = require("mongoose");

var bodyparser = require("body-parser")

var routes = require ("./routes/routes.js")
mongoose.promise = global.promise;
var app = express();
const url = "mongodb://127.0.0.1:27017/test";


mongoose.connect (url , {connectTimeoutMS:2000},function(err,result){
    if (err) {
        console.log(err)
    }
    else{
        console.log(result)
        console.log("connection successful")
    }
});

app.use (bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}))
app.use("/" , routes);

app.listen(3000);
console.log("server is listening");