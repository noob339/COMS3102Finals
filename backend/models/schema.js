const mongoose = require('mongoose')
const Schema = mongoose.Schema

const contactSchema = new Schema({
    email: {type:String, required:true},
    website: {type:String, required:true},
    message: {type:String, required:true},
    entryDate: {type:Date, default:Date.now}
})

const Contact = mongoose.model('Contact', contactSchema, 'contact_form')
const mySchemas = {'Contact':Contact}

module.exports = mySchemas;