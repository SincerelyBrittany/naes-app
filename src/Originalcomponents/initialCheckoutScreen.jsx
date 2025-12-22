import  React, {useState} from 'react';
import emailjs from "emailjs-com";
import getStripe from '../lib/getStripe';

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
  

export default function InitialCheckoutScreen() {
    const [isSubmitted, setIsSubmitted] = useState(false);
  
    async function sendEmail(e) {
      e.preventDefault();
  
      const emailCode = import.meta.env.VITE_EMAIL_PURCHASE;
      const emailAuth = import.meta.env.VITE_EMAIL_AUTH;
  
      if (!emailCode || !emailAuth) {
        throw new Error("Email credentials are missing!");
      }
  
      try {
        // Send the email using EmailJS
        const result = await emailjs.sendForm(
          'contact_service',
          emailCode,
          e.target,
          emailAuth
        );

        console.log(result, "the result")

        // If the email was sent successfully, trigger the Stripe checkout
        if (result.text === 'OK' || result.status === 200) {
         await handleCheckout(); // Wait for checkout to finish
         setIsSubmitted(true); 
        }
  
       
       // Update state to indicate the form was submitted
      } catch (error) {
        console.error('Error sending email:', error);
      } finally {
        e.target.reset(); // Always reset the form, regardless of success or error
      }
    }
  
    return (
      <div className="checkout-form-container">
        <div className="checkout-form-wrapper">
          {isSubmitted ? (
            <div className="form-success">
              <h3>Thank you for your email!</h3>
              <button 
                className="send-another-btn"
                onClick={() => setIsSubmitted(false)}
              >
                Send another email
              </button>
            </div>
          ) : (
            <form onSubmit={sendEmail} className="checkout-form" name="contact" method="POST">
              <input type="hidden" name="form-name" value="contact" />
              
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Purchaser Name<span className="form-required">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-input"
                  placeholder="Your name"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email Address<span className="form-required">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-input"
                  placeholder="your@email.com"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="phone" className="form-label">
                  Phone Number (Optional)
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="form-input"
                  placeholder="Your phone number"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="recipient" className="form-label">
                  Recipient Name<span className="form-required">*</span>
                </label>
                <input
                  type="text"
                  id="recipient"
                  name="recipient"
                  className="form-input"
                  placeholder="Who is this for?"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Personal Message<span className="form-required">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="form-textarea"
                  placeholder="What would you like the message to say?"
                  required
                />
              </div>
              
              <button
                type="submit"
                className="checkout-submit"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    );
  }
  