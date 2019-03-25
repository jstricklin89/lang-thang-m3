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

exports.view_translations = function(req, res) {
    Translations.find()
    .then(translations => {
        res.send(translations);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving translations."
        });
    });
}

exports.delete_translation = function(req, res) {
    Translations.findByIdAndRemove(req.params.id)
    .then(translation => {
        if(!translation) {
            return res.status(404).send({
                message: "Translation not found with id " + req.params.id
            });
        }
        res.send({message: "Translation deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Translation not found with id " + req.params.id
            });                
        }
        return res.status(500).send({
            message: "Could not delete translation with id " + req.params.id
        });
    });
}

exports.test_translation = function(req, res) {

    // Create a Translation
    const translation = new Translations({
        text: "testing some random translation", 
        targetLang: "de",
        translation: "testing some random translation"
    });

    // Save translation in the database
    translation.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the translation."
        });
    });
    
}

// function googleTranslate(text, target) {
//     let translation
//     translate
//     .translate(text, target)
//     .then(results => {
//         translation = results[0];
//       console.log(`Text: ${text}`);
//       console.log(`Translation: ${translation}`);
  
//       new Translations({ text: text,
//           targetLang: target,
//           translation: translation 
//       }).save();
//       res.send({ translation: translation, text: text })
//   })
//   .catch(err => {
//       console.error('ERROR:', err);
//   });
 
// }

// let translateObj = [];

    // for (let i = 1; i < 6; i++) {
        // let result = googleTranslate(text, target)
    //     console.log(result)
    //     translateObj.push(result)
    // }
    // res.send(JSON.stringify(translateObj))