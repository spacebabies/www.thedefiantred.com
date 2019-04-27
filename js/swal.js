switch (window.location.hash) {
  case '#stripe-success':
    Swal.fire({
      title: 'Thanks for your purchase!',
      text: 'I will dispatch your order on the double.',
      type: 'success',
      confirmButtonText: 'Cool'
    });
    break;
  case '#stripe-failure':
    Swal.fire({
      title: "That didn't work...",
      text: 'No payment was received.',
      type: 'error',
      confirmButtonText: 'Try again?'
    });
    break;
}
