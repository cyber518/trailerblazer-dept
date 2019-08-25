$(function() {
   
    var app = {
        /**
         * Initilaize function on homepage load
         */
        init: function name() {
            /**
             * Gets alerted movie's title and sends request to node
             */
            $('.btn-primary').on('click', function() {
                var response = grecaptcha.getResponse();

                if (response.length == 0) {
                    $('.recaptha-error-message').text("Please complete the captcha validation.");
            
                    return false;
                }
            
                $('#contact-form').submit();
            });
            
        }
    }

    app.init();

});

/**
 * Enabled the submit button after captcha verified
 */
function verifyCaptcha() {
    $('.btn-primary').removeClass('disabled');
}