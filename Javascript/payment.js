

function payWithPaystack(amount = 500) {
    let handler = PaystackPop.setup({
        key: 'pk_test_411698493f896d4eefa4be2685f252daddd199bf', // Replace with your Paystack Public Key
        email: 'customer@example.com', // Customer's email
        amount: amount * 100, // Amount in kobo (e.g., ₦50.00 = 5000 kobo)
        currency: 'NGN', // Currency (NGN, USD, etc.)
        ref: 'TXN_' + Math.floor(Math.random() * 1000000000 + 1), // Unique reference number
        callback: function(response) {
            // Open the calendly in an iFrame
            alert('Payment Successful! Transaction Reference: ' + response.reference);
            // You can also send this reference to your backend for verification
        },
        onClose: function() {
            alert('Transaction was not completed.');
        }

    });
}

// const payButtons = document.querySelectorAll('.pay-btn1');

// payButtons.forEach((btn) => {
//   btn.addEventListener("click", ()=>{
//     console.log(payWithPaystack)
    
// payWithPaystack()
//   } )
// });

