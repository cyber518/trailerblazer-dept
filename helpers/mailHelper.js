var nodemailer = require('nodemailer');

module.exports = {
    /**
     * Function to send email
     *
     * @param {Object} params - Object that contains parameters for email options
     *
     */
    sendEmail: async function name(options) {
        //Define transporter with sender's information and options
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL,
                pass: process.env.EMAIL_PASS
            },
            tls: { rejectUnauthorized: false }
        });

        //Define email list
        var mailList = [
            options.email ? options.email : '',
            process.env.OWNER_EMAIL
        ];

        //Define mail optins
        var mailOptions = {
            from: 'trailerblazerproject@gmail.com',
            to: mailList,
            subject: options.subject,
            text: options.text  
        }

        //Send the email with defined options
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('Email send success');
            }
        });
    }
}