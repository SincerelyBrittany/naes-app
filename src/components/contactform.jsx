import emailjs from "emailjs-com";
import  React, {useState} from 'react';


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

export default function ContactForm() {

    // function sendEmail(e) {
    //     e.preventDefault();
    //     const emailCode = import.meta.env.VITE_EMAIL_JS_CODE;
    //     const emailAuth = import.meta.env.VITE_EMAIL_AUTH;
    //     emailjs.sendForm('contact_service', emailCode, e.target, emailAuth)
    //         .then((result) => {
    //             console.log(result.text);
    //         }, (error) => {
    //             console.log(error.text);
    //         });
    //     e.target.reset();
    // }

    const [isSubmitted, setIsSubmitted] = useState(false);
    async function sendEmail(e) {
        e.preventDefault();
        const emailCode = import.meta.env.VITE_EMAIL_JS_CODE;
        const emailAuth = import.meta.env.VITE_EMAIL_AUTH;
    
        const postfields = {
            user_id: emailAuth,  // Your EmailJS user ID
            service_id: 'contact_service',  // Your service ID
            template_id: emailCode,  // Your template ID
            template_params: {
                name: e.target.name.value,
                email: e.target.email.value,
                subject: e.target.subject.value,
                message: e.target.message.value,
                phone: e.target.phone.value,
                // Add your template parameters here, if any
                // Example: name: e.target.name.value,
            },
        };
    
        try {
            const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(postfields),
            });
    
            // Handle response as text first
            const responseText = await response.text();
    
            if (!response.ok) {
                throw new Error(responseText);  // Throw error with response text
            }
    
            console.log(responseText);  // Log the response if needed
            setIsSubmitted(true);  // Update state to indicate the form was submitted
            e.target.reset();
        } catch (error) {
            debugger
            console.log(error);  // Log any errors
        }
    }
    

    // function sendEmail(e) {
    //     e.preventDefault();
    //     const emailCode = import.meta.env.VITE_EMAIL_JS_CODE;
    //     const emailAuth = import.meta.env.VITE_EMAIL_AUTH;
    //     emailjs.sendForm('contact_service', emailCode, e.target, emailAuth)
    //         .then((result) => {
    //             console.log(result.text);
    //             setIsSubmitted(true); // Update state to indicate the form was submitted
    //         }, (error) => {
    //             console.log(error.text);
    //         });
    //     e.target.reset();
    // }

    return (
          <div  className="text-center">
      <div>
        {/* <div className="section-title mt-10">
        <h2>Contact The Author</h2>
        
      </div> */}
      
        <div style={styles.container}>
            
            <div style={styles.form}>
            {isSubmitted ? (
                <>
                        <h3>Thank you for your email!</h3> 
                        <i onClick={() => setIsSubmitted(false)}> Send another email</i>
                        </>
                    ) : (
                <form onSubmit={sendEmail}>
                    <div className="row pt-5 mx-auto">
                        <div className="col-12 form-group mx-auto">
                            <input
                                type="text"
                                style={styles.input}
                                placeholder="Name"
                                name="name"
                                required
                            />
                        </div>
                        <div className="col-12 form-group pt-2 mx-auto">
                            <input
                                type="email"
                                style={styles.input}
                                placeholder="Email Address"
                                name="email"
                                required
                            />
                        </div>
                        <div className="col-12 form-group pt-2 mx-auto">
                            <input
                                type="tel"
                                style={styles.input}
                                placeholder="Phone Number (optional)"
                                name="phone"
                            />
                        </div>
                        <div className="col-12 form-group pt-2 mx-auto">
                            <input
                                type="text"
                                style={styles.input}
                                placeholder="Subject"
                                name="subject"
                            />
                        </div>
                        <div className="col-12 form-group pt-2 mx-auto">
                            <textarea
                                style={styles.textarea}
                                cols="30"
                                rows="8"
                                placeholder="Your message"
                                name="message"
                                required
                            ></textarea>
                        </div>
                        <div className="col-12 pt-3 mx-auto">
                            <input
                                type="submit"
                                className="btn btn-custom btn-lg page-scroll"
                                value="Send Message"
                                onMouseOver={(e) => e.target.style.backgroundColor = styles.buttonHover.backgroundColor}
                                onMouseOut={(e) => e.target.style.backgroundColor = styles.button.backgroundColor}
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