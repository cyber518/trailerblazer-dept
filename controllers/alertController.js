const mailHelper = require('../helpers/mailHelper');

module.exports.alert_post = function (req, res, next) {
    try {
        var mailOptions = {
            subject: "Wrong Trailer Alert",
            text: 'We have recieved your wrong trailer content alert for "' + req.body.title + '". The issue will be fixed soon'
        }

        mailHelper.sendEmail(mailOptions);

        res.json({
            success: true
        });

    } catch (err) {
        res.json({
            error: err
        })
    }
}