//nodemon required setup
var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;
app.listen(port);
console.log('todo list RESTful API server started on: ' + port);
//initializing routes for our app
routes = require('./routes/translateRoutes')
routes(app)

  // export GOOGLE_APPLICATION_CREDENTIALS="C:\Users\alumniJohnson04\node-workspace\google-translate-test\translator-nodejs-e71755a5e63b.json"