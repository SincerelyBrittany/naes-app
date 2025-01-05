import  React, {useState} from 'react';
import emailjs from "emailjs-com";
import getStripe from '../lib/getStripe';



const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // height: '100vh',
    padding: '1rem',
    marginBottom:'50px',
  },
  form: {
    width: '100%',
    maxWidth: '600px',
    backgroundColor: '#fff',
    padding: '2rem',
    borderRadius: '0.5rem',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  input: {
    width: '100%',
    padding: '0.75rem',
    marginBottom: '1rem',
    border: '1px solid #ddd',
    borderRadius: '0.25rem',
    boxSizing: 'border-box',
  },
  textarea: {
    width: '100%',
    padding: '0.75rem',
    marginBottom: '1rem',
    border: '1px solid #ddd',
    borderRadius: '0.25rem',
    boxSizing: 'border-box',
  },
  button: {
    width: '100%',
    padding: '0.75rem',
    border: 'none',
    borderRadius: '0.25rem',
    backgroundColor: '#17a2b8',
    color: '#fff',
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'background-color 0.2s',
  },
  buttonHover: {
    backgroundColor: '#138496',
  },
};

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
      successUrl: `http://localhost:5173/success`,
      cancelUrl: `http://localhost:5173/cancel`,
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
      <div className="text-center">
        <div>
          <div style={styles.container}>
            <div style={styles.form}>
              {isSubmitted ? (
                <>
                  <h3>Thank you for your email!</h3>
                  <i onClick={() => setIsSubmitted(false)}>Send another email</i>
                </>
              ) : (
                <form onSubmit={sendEmail} name="contact" method="POST">
                  <input type="hidden" name="form-name" value="contact" />
                  <div className="basic_info row pt-5 mx-auto">
                    <div className="input col-12 form-group mx-auto">
                      <input
                        type="text"
                        style={styles.input}
                        placeholder="Purchaser Name"
                        name="name"
                      />
                    </div>
                    <div className="input col-12 form-group pt-2 mx-auto">
                      <input
                        type="email"
                        style={styles.input}
                        placeholder="Email Address"
                        name="email"
                      />
                    </div>
                    <div className="input col-12 form-group pt-2 mx-auto">
                      <input
                        type="tel"
                        style={styles.input}
                        placeholder="Phone Number (optional)"
                        name="phone"
                      />
                    </div>
                    <div className="input col-12 form-group pt-2 mx-auto">
                      <input
                        type="text"
                        style={styles.input}
                        placeholder="Recipient Name"
                        name="subject"
                      />
                    </div>
                    <div className="input col-12 form-group pt-2 mx-auto">
                      <textarea
                        style={styles.textarea}
                        cols="30"
                        rows="8"
                        placeholder="What would you like the message to say?"
                        name="message"
                      ></textarea>
                    </div>
                    <div className="col-12 pt-3 mx-auto">
                      <input
                        type="submit"
                        className="btn btn-custom btn-lg page-scroll"
                        value="Send Message"
                        onMouseOver={(e) =>
                          (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)
                        }
                        onMouseOut={(e) =>
                          (e.target.style.backgroundColor = styles.button.backgroundColor)
                        }
                      />
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
  