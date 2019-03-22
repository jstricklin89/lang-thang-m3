// var request = require('request');
var express = require('express');
var routes = require('../routes/translateRoutes')

// Imports the Google Cloud client library
const {Translate} = require('@google-cloud/translate');

// Your Google Cloud Platform project ID
const projectId = 'translator-nodej-1553180186661';

// Instantiates a client
const translate = new Translate({
  projectId: projectId,
});

exports.process_translation = function(req, res) {

console.log(req.body)
const data = req.body;
// The text to translate
const text = data.originalString;
// The target language
const target = data.targetLanguage;
// Translates some text into Russian
translate
  .translate(text, target)
  .then(results => {
    const translation = results[0];

    console.log(`Text: ${text}`);
    console.log(`Translation: ${translation}`);
    res.send({ translation: translation, text: text })
  })
  .catch(err => {
    console.error('ERROR:', err);
  });
}