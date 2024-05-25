// paypal.js
// Render the PayPal button
$(function(){
    paypal.Button.render({

        // Set your environment

        //TODO: Dynamically provide sandbox or production
        env: 'sandbox', // sandbox | production

        // PayPal Client IDs - replace with your own
        // Create a PayPal app: https://developer.paypal.com/developer/applications/create

        //TODO: Dynamically provide clientID
        client: {
            sandbox:    'ZZZZZZ',
            production: '//TODO: Provide this later'
        },

        // Wait for the PayPal button to be clicked

        payment: function() {

            // Make a client-side call to the REST api to create the payment

            return paypal.rest.payment.create(this.props.env, this.props.client, {
                transactions: [
                    {
                        amount: { total: '5.00', currency: 'USD' }
                    }
                ]
            });
        },

        // Wait for the payment to be authorized by the customer

        onAuthorize: function(data, actions) {

            return actions.payment.get().then(function(paymentData) {

                $('#paypal-button-container').style.display = 'none'; //hide button

                //TODO: Show user payment details
                //TODO: Create input hidden fields and set payerID, paymentID, etc..for later authoriza/capture
            });
        },

        onClick: function(){
            $('#rd').trigger('click');
        },

    }, '#paypal-button-container');
});
