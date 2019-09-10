var exppress = require('express');
var showLeadsRouter = exppress.Router()
var MongoClient = require('mongodb').MongoClient;
var config = require ('../services')

const url = config.dataBase;

showLeadsRouter.get('/', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    
        MongoClient.connect(url, function(err, db) {
            if (err) throw err;
            var dbo = db.db("DrinkPrime");
            dbo.collection("Leads").find({}).toArray(function(err, data) {
                if (err) throw err;
                res.send(data)
                db.close();
            });
          });
    
})

module.exports = showLeadsRouter
