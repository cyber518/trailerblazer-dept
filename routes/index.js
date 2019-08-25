//Define dependencies
var express = require('express');
var router = express.Router();

//Require contoller module
var indexController = require('../controllers/indexController');

/**
 * Route to render homepage
 */
router.get('/', indexController.index_get);

module.exports = router;
