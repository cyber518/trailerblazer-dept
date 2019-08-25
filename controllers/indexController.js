//Get functions handler for index route
module.exports.index_get = function(req, res, next) {
    res.render('index', { title: 'TrailerBlazer' });
}