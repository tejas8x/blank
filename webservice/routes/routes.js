var express = require ("express");

var path = require ("path")

var mongoose = require("mongoose")

var bodyparser = require("body-parser")

var schema = mongoose.Schema;

var router= express.Router();

//design model using mongoose schema

var empschema = new schema({
    empid:String,
    ename:String,
    sal:String
})


var emp = mongoose.model('emptab',empschema, 'emptab');

router.get("/employee",function (req,res){
    emp.find().exec(function(err,data){
        if(err){
            res.status(500).send("no data found");
        }
        else{
            res.send(data);
        }
    })

});
module.exports=router;