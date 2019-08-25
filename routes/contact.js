//Define dependencies
const express = require('express');
const router = express.Router();
const { check } = require('express-validator');

//Require contoller module
const contactController = require('../controllers/contactController');

/**
 * Request trailer router to render the page 
 */
router.get('/', contactController.contact_get);

/**
 * Handles the requested trailer form 
 */
router.post('/', [check('email', 'Invalid email').isEmail(), check('trailer', 'Trailer is empty').not().isEmpty()], contactController.contact_post);

module.exports = router;