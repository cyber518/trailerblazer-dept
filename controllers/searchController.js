//Define dependencies
const axios = require('axios');

//Post function handler for search route
module.exports.search_post = function (req, res, next) {
    //Define Authorization key for API
    var config = {
        headers: {
            Authorization: process.env.AUTH_KEY
        }
    }
    
    //Make request to API to get movie results
    axios.get('https://trailerblazer.herokuapp.com/search?movie=' + req.body.query.replace(/[^a-zA-Z ]/g, "").replace(/ /g, "+"), config)
        .then((response) => {
            //Render search result page
            res.render('search', {
                title: 'TrailerBlazer',
                apiResult: response.data,
                alertURL: req.protocol + '://' + req.get('host') + '/alert',
                noResult: response.data.Message ? true : false
            });
        }).catch(err => {
            //Log if any error accours
            console.log(err);
        });
}