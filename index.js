//initialize mongoose for mongoDB
const mongoose = require('mongoose')
const keys = require('./config/keys');
require('./models/translateModel');
mongoose.connect(keys.mongoURI, { useNewUrlParser: true });

//nodemon required setup
var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;
  cors = require('cors');
app.listen(port);
console.log('todo list RESTful API server started on: ' + port);

//use cors for post and handle json data
app.use(cors());
app.use(express.json());

//initializing routes for our app
routes = require('./routes/translateRoutes')
routes(app)

const path = require('path');

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

