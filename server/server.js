var express = require('express');
var app = express();
var session = require('express-session')
var loginRouter = require('./routes/login')
var isLoginRouter = require('./routes/isLogin')
var createLeadsRouter = require('./routes/createLeads')
var showLeadsRouter = require('./routes/showLeads')

app.use(session({
    secret : "session"
}))
app.use('/',express.static('public'))
app.use('/login', loginRouter)
app.use('/isLogin',isLoginRouter)
app.use('/createLeads',createLeadsRouter)
app.use('/showLeads',showLeadsRouter)


app.listen(3001)
