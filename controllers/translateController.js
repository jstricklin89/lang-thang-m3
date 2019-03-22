// var request = require('request');
// var express = require('express');
// var routes = require('../routes/translateRoutes')
const mongoose = require('mongoose');
const Translations = mongoose.model('translations');

// Imports the Google Cloud client library
const {Translate} = require('@google-cloud/translate');
// Your Google Cloud Platform project ID
const projectId = 'translator-nodej-1553180186661';
// Instantiates a client
const translate = new Translate({
  projectId: projectId,
});

exports.process_translation = function(req, res) {
const data = req.body;
const text = data.originalString;
const target = data.targetLanguage;
// Translates some text
translate
  .translate(text, target)
  .then(results => {
    const translation = results[0];

    console.log(`Text: ${text}`);
    console.log(`Translation: ${translation}`);

    new Translations({ text: text,
        targetLang: target,
        translation: translation 
    }).save();

    res.send({ translation: translation, text: text })
  })
  .catch(err => {
    console.error('ERROR:', err);
  });
}