var stripe = Stripe('pk_test_q385niI9nu16nv5fip1o8ZIC00aQsGJB2i');

var checkoutButton = document.getElementById('checkout-button-sku_EveseRWsvXPnTG');
checkoutButton.addEventListener('click', function () {
  // When the customer clicks on the button, redirect
  // them to Checkout.
  stripe.redirectToCheckout({
    items: [{sku: 'sku_EveseRWsvXPnTG', quantity: 1}],

    // Note that it is not guaranteed your customers will be redirected to this
    // URL *100%* of the time, it's possible that they could e.g. close the
    // tab between form submission and the redirect.
    successUrl: 'https://www.thedefiantred.com/success',
    cancelUrl: 'https://www.thedefiantred.com/canceled',
  })
  .then(function (result) {
    if (result.error) {
      // If `redirectToCheckout` fails due to a browser or network
      // error, display the localized error message to your customer.
      var displayError = document.getElementById('error-message');
      displayError.textContent = result.error.message;
    }
  });
});
