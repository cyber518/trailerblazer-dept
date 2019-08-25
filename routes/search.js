//Define dependencies
const express = require('express');
const router = express.Router();

//Require contoller module
const searchController = require('../controllers/searchController');

/**
 * Handles the search  from an renders the result page 
 */
router.post('/', searchController.search_post);

module.exports = router;
