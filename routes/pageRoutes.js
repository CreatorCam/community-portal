// routes/pageRoutes.js

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    //render the "home.ejs" view
    res.render('home')
});

router.get('/about', (req, res) => {
     //render the "about.ejs" view
    res.render('about')
});

router.get('/events', (req, res) => {
     //render the "events.ejs" view
    res.render('events')
});

router.get('/contact', (req, res) => {
     //render the "contact.ejs" view
    res.render('contact')
});

router.get('/thankyou', (req, res) => {
     //render the "thankyou.ejs" view after file submission
    res.render('thankyou')
});

//contact form submission route (POST/contact)

router.post('/contact', (req,res) => {
    const { name, email, message } = req.body;
    //Print the form data to the console
    console.log('Contact form submitted: '+ {name, email, message});

    //Redirect to the "thankyou" page after form submission
    res.redirect('/thankyou');
});
 
module.exports = router;
