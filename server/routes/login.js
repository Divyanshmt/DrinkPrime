var exppress = require('express');
var loginRouter = exppress.Router()
const MongoClient = require('mongodb').MongoClient;
var config = require('../services')
var  bodyParser = require('body-parser')

var urlencodedParser = bodyParser.urlencoded({ extended: false })
const url = config.dataBase;
options = {
    useNewUrlParser: true
};

loginRouter.post('/',urlencodedParser , (req,res) => {
    res.header("Access-Control-Allow-Origin", "*");
        MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("DrinkPrime");
        dbo.collection("Users").findOne({}, function(err, result) {
          if (err) throw err;
          if(req.body.userName == result.userName && req.body.password == result.password){  
              req.session.identity  = result._id   
              res.redirect('http://localhost:3000');
        }else{ res.send("invalid") }
          db.close();
        });
      });

})

module.exports = loginRouter
