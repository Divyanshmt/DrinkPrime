var exppress = require('express');
const MongoClient = require('mongodb').MongoClient;
var config = require('../services')

var createLeadsRouter = exppress.Router()

const url = config.dataBase;
options = {
    useNewUrlParser: true
};

var formData = {};

createLeadsRouter.get('/', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    if(!req.session.identity){
        res.send('unautherised')
    }else{
        formData.name = req.query.name
    formData.mobile = req.query.mobile
    formData.email = req.query.email
    formData.address = req.query.address
    formData.area = req.query.area
    formData.date = req.query.date
    formData.time = req.query.time

    MongoClient.connect(url, options).then(function (ok) {

        let db1 = ok;
        dbName = 'DrinkPrime';

        var date = new Date()

        function idGen() {
            var id = date.getFullYear().toString().slice(2) + date.getMonth() + date.getDate() + date.getHours() + date.getMinutes() + date.getSeconds()
            return id
        }

        var id = idGen();

        return db1.db(dbName).collection('Leads').insertOne(
            {
                "_id": id,
                "name": formData.name,
                "enquiryDate": date.getDate() + ":" + date.getMonth() + ":" + date.getFullYear(),
                "enquiryTime": date.toTimeString().slice(0,8),
                "mobile": formData.mobile,
                "email": formData.email,
                "address": formData.address,
                "area": formData.area
            });

    })
        .then(function () {
            res.send('inserted')
            db1.close();
        });
    }
    
})



module.exports = createLeadsRouter
