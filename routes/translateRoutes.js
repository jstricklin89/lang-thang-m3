var express = require('express');
// var router = express.Router();



module.exports = function(app) {
    var translate = require('../controllers/translateController')
    console.log("hit routes")
    app.route('/translate')
    .get(translate.process_translation)
}

