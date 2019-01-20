var express = require('express');
var MongooseAutoIncrementID = require ('mongoose-auto-increment-reworked');
var mongoose = require('mongoose');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');

var port = process.env.PORT || 3000;

var db = mongoose.connect('mongodb://localhost/videosAPI');




app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.get('/', function(req, res){
    
})

var videoRouter = require('./routes/videoRoutes')();
app.use('/api/videos',videoRouter)

app.listen(port,function(){
    console.log('listen');
})