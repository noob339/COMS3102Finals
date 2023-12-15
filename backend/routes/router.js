const express = require('express');
const router = express.Router();
const schemas = require('../models/schema.js');


router.post('/contact', async(req,res) => {
    const {email, website, message} = req.body;

    const newContact = new schemas.Contact({
        email: email,
        website: website,
        message: message
    });

    try {
        const saveContact = await newContact.save();
        res.send("message sent");
    } catch (error) {
        console.error(error);
        res.send("failed message");
    }

    res.end();
})

router.get('/api', (req, res) => {
    const websiteData = 
    [
        {
        "id": 1,
        "name": "google",
        "email": "google@gmail.com",
        "website": "google.com"
        },
        {
        "id": 2,
        "name": "yahoo",
        "email": "yahoo@mail.com",
        "website": "yahoo.com"
        },
        {
        "id": 3,
        "name": "microsoft",
        "email": "msft@outlook.com",
        "website": "microsoft.com"
        }
    ]
  
    res.send(websiteData);
});

module.exports = router;