var express = require('express');

module.exports = function(app) {
    var translate = require('../controllers/translateController')

    app.route('/translations')
    .get(translate.view_translations)
    .post(translate.process_translation)

    app.route('/translations/:id')
    .delete(translate.delete_translation)

    app.route('/translations/test')
    .post(translate.test_translation)
}

