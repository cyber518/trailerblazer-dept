//Define dependencies
const mailHelper = require('../helpers/mailHelper');
const { validationResult } = require('express-validator');

//Get functions handler for contact route
module.exports.contact_get = function(req, res, next) {
    //Render the request trailer template with required informations and session values
    res.render('contact', {
        title: 'Contact Us',
        captchaKey: process.env.GOOGLE_RECAPTCA_KEY,
        success: req.session.success,
        errors: req.session.errors,
        name: req.session.name,
        email: req.session.email,
        trailer: req.session.trailer
    });

    //Clear the session error and success values after rendering request trailer form
    req.session.success = null;
    req.session.errors = null;
}

//Post functions handler for contact route
module.exports.contact_post = function(req, res, next) {
    //Execute error check
    var errors = validationResult(req);

    //Check if any error accoured and set session if any
    if (!errors.isEmpty()) {
        req.session.errors = errors;
        req.session.name = req.body.name,
        req.session.email = req.body.email,
        req.session.trailer = req.body.trailer
    } else {
        //If no error, send email
        var mailOptions = {
            email: req.body.email,
            subject: 'New Trailer Request',
            text: 'Dear ' + req.body.name + ', Your trailer request for ' + req.body.trailer + 'is recieved. It will be added as soon as possible.' 
        }

        mailHelper.sendEmail(mailOptions);

        //Empty session values on success
        req.session.name = null;
        req.session.email = null;
        req.session.trailer = null;
        req.session.success = true;
    }

    //Redirect to contact template
    res.redirect('/contact');
}