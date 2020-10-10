import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey =
        'pk_test_51HahGBLbQFK4YG0hkUdCMTOiaHW5agbG13d9ngMVhXDZGCPnQGdV03SzHdrvIAPs55YunUC3KFZ6tSyBRotYhH2D007LPo7vST';
    const onToken = (token) => {
        console.log(token);
        alert('Payment successful');
    };

    return (
        <StripeCheckout
            label='Pay now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image=''
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;
