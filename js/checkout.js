var stripe = Stripe('pk_live_9e0LBOYyCmPlVcxYSrNricJe00aPuFrmK2');
var checkoutButtons = document.querySelectorAll('.item-plan button')
for(var i=0; i<checkoutButtons.length; i++) {
  var checkoutButton = checkoutButtons[i];

  checkoutButton.addEventListener('click', function () {
    stripe.redirectToCheckout({
      items: [{sku: checkoutButton.value, quantity: 1}],
      successUrl: 'https://www.thedefiantred.com/#stripe-success',
      cancelUrl: 'https://www.thedefiantred.com/#stripe-canceled',
    })
    .then(function (result) {
      if (result.error) {
        var displayError = document.getElementById('error-message');
        displayError.textContent = result.error.message;
      }
    });
  });
}
