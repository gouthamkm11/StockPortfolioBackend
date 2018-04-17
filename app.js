var express = require('express');
var apiEndpoint = require('./controller/apiController');
var angularEndPoint = require('./controller/angular.profileEndPoints');
var viewEngine = require('ejs');
var cors = require('cors');
var mongoose = require('mongoose');
var connstr = require('./config/dbconnection');

var app = express();
app.listen(3001);
app.use(cors());
apiEndpoint(app);
angularEndPoint(app);
app.set('view engine', 'ejs');

app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin", "http://localhost:4200");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})

//DB Connection
mongoose.connect(connstr.dbconfig.db);
mongoose.connection.on('connected', (err)=>{
    if (err) throw err;
    console.log('DB Connected');
})

app.get('/', function(req,res){
    res.render('index');
    });