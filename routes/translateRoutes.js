var express = require('express');

module.exports = function(app) {
    var translate = require('../controllers/translateController')

    app.route('/translate')
    .get(translate.process_translation)
    .post(translate.process_translation)
}

