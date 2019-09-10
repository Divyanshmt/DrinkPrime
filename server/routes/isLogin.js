var exppress = require('express');
var isLoginRouter = exppress.Router()

isLoginRouter.get('/', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    
    res.send(req.session.identity ? "true" : "false")
})

module.exports = isLoginRouter




