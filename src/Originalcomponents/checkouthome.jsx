import React from 'react';
import getStripe from '../lib/getStripe';

export default function CheckoutHome() {
  async function handleCheckout() {
    const stripe = await getStripe();
    const { error } = await stripe.redirectToCheckout({
      lineItems: [
        {
          price: import.meta.env.VITE_PUBLIC_STRIPE_PRICE_ID,
          quantity: 1,
        },
      ],
      mode: 'payment',
      successUrl: `${window.location.origin}/success`,
      cancelUrl: `${window.location.origin}/cancel`,
      // customerEmail: 'customer@email.com',
    });
    if (error) {
      console.warn(error.message);
    }
  }

  return <button onClick={handleCheckout}>Checkout</button>;
}