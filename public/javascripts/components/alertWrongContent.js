$(function() {
   
    var app = {
        /**
         * Initilaize function on homepage load
         */
        init: function name() {
            /**
             * Gets alerted movie's title and sends request to node
             */
            $('.alert-trailer').on('click', function name() {
                var $this = $(this);
                var url = "http://localhost:3000/alert";
    
                var title = $this.closest('.movie-info').find('.card-title').text();
    
                $.ajax({
                    url: url,
                    type: 'POST',
                    dataType: 'json',
                    data: {
                        title: title
                    },
                    success: function(data) {
                        if (data.success) {
                            alert('Your mesage about wrong content has been delivered to site management successfully. The issue will be resolved as soon as possible');
                        }
                    },
                    error: function(error) {
                        alert(error);
                    }
                })
            });
        }
    }

    app.init();

});