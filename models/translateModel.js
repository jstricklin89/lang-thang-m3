const mongoose = require('mongoose');
const { Schema } = mongoose;

const translateSchema = new Schema({
    text: String,
    targetLang: String,
    translation: String
})

mongoose.model('translations', translateSchema);