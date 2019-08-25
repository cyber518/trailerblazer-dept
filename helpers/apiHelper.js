const axios = require('axios');
module.exports = {
    /**
     * Gets the movies result object for required string
     *
     * @param {String} query - String that required to be searched
     * @return {Object} Final object that contains movie infos
     *
     */
    getSearchResult: async function(query) {
        //Define URL to make request
        var url = 'localhost:3001/search?movie=' + query.replace(/[^a-zA-Z ]/g, "").replace(/ /g,"+");
        
        //Make the request to defined URL and return the respone data
        return axios.get(url)
            .then(response => {
                return response.data;
            })
            .catch(error => {
                //Log the errors if any
                console.log(error);
            });
    }
}