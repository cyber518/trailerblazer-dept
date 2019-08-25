//Define dependencies
const express = require('express');
const router = express.Router();
const { check } = require('express-validator');

//Require contoller module
const alertController = require('../controllers/alertController');

/**
 * Request alert router to inform owner about wrong content 
 */
router.post('/', alertController.alert_post);

module.exports = router;