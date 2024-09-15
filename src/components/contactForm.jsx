// import React from "react";
// import { useForm, Resolver } from "react-hook-form";
// import "./contactFormStyles.css";

// type FormValues = {
//   name: string;
//   email: string;
//   subject: string;
//   message: string;
// };

// const resolver: Resolver<FormValues> = async (values) => {
//   const errors: Record<string, any> = {};

//   // Name validation
//   if (!values.name) {
//     errors.name = {
//       type: "required",
//       message: "Name is required."
//     };
//   }

//   // Email validation
//   if (!values.email) {
//     errors.email = {
//       type: "required",
//       message: "Email is required."
//     };
//   } else if (!/\S+@\S+\.\S+/.test(values.email)) {
//     errors.email = {
//       type: "pattern",
//       message: "Email is not valid."
//     };
//   }

//   // Subject validation
//   if (!values.subject) {
//     errors.subject = {
//       type: "required",
//       message: "Subject is required."
//     };
//   }

//   // Message validation
//   if (!values.message) {
//     errors.message = {
//       type: "required",
//       message: "Message is required."
//     };
//   }

//   return {
//     values: Object.keys(errors).length ? {} : values,
//     errors
//   };
// };

// export default function ContactForm() {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors }
//   } = useForm<FormValues>({
//     resolver: resolver
//   });

//   const onSubmit = handleSubmit((data) => alert(JSON.stringify(data)));

//   return (
//     <div className="contactForm">
//       <h1>Contact Me </h1>
//       <form onSubmit={onSubmit}>
//         <div>
//           <label>Name</label>
//           <input {...register("name")} placeholder="name" />
//           {errors?.name && <p>{errors.name.message}</p>}
//         </div>

//         <div>
//           <label>Email</label>
//           <input {...register("email")} placeholder="email" />
//           {errors?.email && <p>{errors.email.message}</p>}
//         </div>

//         <div>
//           <label>Subject</label>
//           <input {...register("subject")} placeholder="subject" />
//           {errors?.subject && <p>{errors.subject.message}</p>}
//         </div>

//         <div>
//           <label>Message</label>
//           <input {...register("message")} placeholder="message" />
//           {errors?.message && <p>{errors.message.message}</p>}
//         </div>

//         <input type="submit" />
//       </form>
//     </div>
//   );
// }

// import React from "react";
// import { useForm, Resolver } from "react-hook-form";
// import emailjs from 'emailjs-com';

// type FormValues = {
//   name: string;
//   email: string;
//   subject: string;
//   message: string;
// };

// const resolver: Resolver<FormValues> = async (values) => {
//   const errors: Record<string, any> = {};

//   if (!values.name) {
//     errors.name = {
//       type: "required",
//       message: "Name is required."
//     };
//   }

//   if (!values.email) {
//     errors.email = {
//       type: "required",
//       message: "Email is required."
//     };
//   } else if (!/\S+@\S+\.\S+/.test(values.email)) {
//     errors.email = {
//       type: "pattern",
//       message: "Email is not valid."
//     };
//   }

//   if (!values.subject) {
//     errors.subject = {
//       type: "required",
//       message: "Subject is required."
//     };
//   }

//   if (!values.message) {
//     errors.message = {
//       type: "required",
//       message: "Message is required."
//     };
//   }

//   return {
//     values: Object.keys(errors).length ? {} : values,
//     errors
//   };
// };

// export default function ContactForm() {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors }
//   } = useForm<FormValues>({
//     resolver: resolver
//   });

//   const onSubmit = handleSubmit((data) => {
//     emailjs.send('contact_service', 'template_4szwfg8', data, 'YOUR_USER_ID')
//       .then((response) => {
//         alert('Message sent successfully!');
//       })
//       .catch((error) => {
//         alert('Failed to send the message. Please try again.');
//         console.error('EmailJS error:', error);
//       });
//   });

//   return (
//     <div className="App">
//       <h1>React Hook Form - EmailJS Integration</h1>
//       <form onSubmit={onSubmit}>
//         <div>
//           <label>Name</label>
//           <input {...register("name")} placeholder="name" />
//           {errors?.name && <p>{errors.name.message}</p>}
//         </div>

//         <div>
//           <label>Email</label>
//           <input {...register("email")} placeholder="email" />
//           {errors?.email && <p>{errors.email.message}</p>}
//         </div>

//         <div>
//           <label>Subject</label>
//           <input {...register("subject")} placeholder="subject" />
//           {errors?.subject && <p>{errors.subject.message}</p>}
//         </div>

//         <div>
//           <label>Message</label>
//           <input {...register("message")} placeholder="message" />
//           {errors?.message && <p>{errors.message.message}</p>}
//         </div>

//         <input type="submit" />
//       </form>
//     </div>
//   );
// }


// import React from "react";
// import emailjs from "emailjs-com";
// import { useForm } from "react-hook-form";

// type FormValues = {
//   user_name: string;
//   user_email: string;
//   message: string;
//   contact_number: string; // Hidden field
// };

// export default function ContactForm() {
//   const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({
//     defaultValues: {
//       contact_number: "697483" // Set default value for hidden field
//     }
//   });

//   const onSubmit = handleSubmit((data) => {
//     emailjs.sendForm('contact_service', 'contact_form', '#contact-form', 'VHZAaHAmIZgTxUswy')
//       .then((response) => {
//         alert('Message sent successfully!');
//       })
//       .catch((error) => {
//         alert('Failed to send the message. Please try again.');
//         console.error('EmailJS error:', error);
//       });
//   });

//   return (
//     <div className="App">
//       <h1>Contact Form</h1>
//       <form id="contact-form" onSubmit={onSubmit}>
//         {/* Hidden field */}
//         <input type="hidden" name="contact_number" value="697483" />

//         <div>
//           <label>Name</label>
//           <input {...register("user_name", { required: "Name is required." })} />
//           {errors.user_name && <p>{errors.user_name.message}</p>}
//         </div>

//         <div>
//           <label>Email</label>
//           <input {...register("user_email", { 
//             required: "Email is required.",
//             pattern: { value: /\S+@\S+\.\S+/, message: "Email is not valid." }
//           })} />
//           {errors.user_email && <p>{errors.user_email.message}</p>}
//         </div>

//         <div>
//           <label>Message</label>
//           <textarea {...register("message", { required: "Message is required." })} />
//           {errors.message && <p>{errors.message.message}</p>}
//         </div>

//         <button type="submit">Send</button>
//       </form>
//     </div>
//   );
// }

// import emailjs from "emailjs-com";
// import React from 'react';



// export default function ContactUs() {

//     function sendEmail(e) {
//         e.preventDefault();
// const emailCode = import.meta.env.VITE_EMAIL_JS_CODE
//     emailjs.sendForm('contact_service', emailCode, e.target, 'VHZAaHAmIZgTxUswy')
//         .then((result) => {
//             console.log(result.text);
//         }, (error) => {
//             console.log(error.text);
//         });
//         e.target.reset()
//     }

//     return(
//         <div>
//             <div className="container">
//             <form onSubmit={sendEmail}>
//                     <div className="row pt-5 mx-auto">
//                         <div className="col-8 form-group mx-auto">
//                             <input type="text" className="form-control" placeholder="Name" name="name"/>
//                         </div>
//                         <div className="col-8 form-group pt-2 mx-auto">
//                             <input type="email" className="form-control" placeholder="Email Address" name="email"/>
//                         </div>
//                         <div className="col-8 form-group pt-2 mx-auto">
//                             <input type="text" className="form-control" placeholder="Subject" name="subject"/>
//                         </div>
//                         <div className="col-8 form-group pt-2 mx-auto">
//                             <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
//                         </div>
//                         <div className="col-8 pt-3 mx-auto">
//                             <input type="submit" className="btn btn-info" value="Send Message"></input>
//                         </div>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     )
// }


// import emailjs from "emailjs-com";
// import React from 'react';

// // Define inline styles
// const styles = {
//   container: {
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     height: '100vh',
//     padding: '1rem',
//   },
//   form: {
//     width: '100%',
//     maxWidth: '600px',
//     backgroundColor: '#fff',
//     padding: '2rem',
//     borderRadius: '0.5rem',
//     boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
//   },
//   input: {
//     width: '100%',
//     padding: '0.75rem',
//     marginBottom: '1rem',
//     border: '1px solid #ddd',
//     borderRadius: '0.25rem',
//     boxSizing: 'border-box',
//   },
//   textarea: {
//     width: '100%',
//     padding: '0.75rem',
//     marginBottom: '1rem',
//     border: '1px solid #ddd',
//     borderRadius: '0.25rem',
//     boxSizing: 'border-box',
//   },
//   button: {
//     width: '100%',
//     padding: '0.75rem',
//     border: 'none',
//     borderRadius: '0.25rem',
//     backgroundColor: '#17a2b8',
//     color: '#fff',
//     fontSize: '1rem',
//     cursor: 'pointer',
//     transition: 'background-color 0.2s',
//   },
//   buttonHover: {
//     backgroundColor: '#138496',
//   },
// };

// export default function ContactUs() {

//     function sendEmail(e) {
//         e.preventDefault();
//         const emailCode = import.meta.env.VITE_EMAIL_JS_CODE;
//         emailjs.sendForm('contact_service', emailCode, e.target, 'VHZAaHAmIZgTxUswy')
//             .then((result) => {
//                 console.log(result.text);
//             }, (error) => {
//                 console.log(error.text);
//             });
//         e.target.reset();
//     }

//     return(
//         <div style={styles.container}>
//             <div style={styles.form}>
//                 <form onSubmit={sendEmail}>
//                     <div className="row pt-5 mx-auto">
//                         <div className="col-12 form-group mx-auto">
//                             <input type="text" style={styles.input} placeholder="Name" name="name"/>
//                         </div>
//                         <div className="col-12 form-group pt-2 mx-auto">
//                             <input type="email" style={styles.input} placeholder="Email Address" name="email"/>
//                         </div>
//                         <div className="col-12 form-group pt-2 mx-auto">
//                             <input type="text" style={styles.input} placeholder="Subject" name="subject"/>
//                         </div>
//                         <div className="col-12 form-group pt-2 mx-auto">
//                             <textarea style={styles.textarea} cols="30" rows="8" placeholder="Your message" name="message"></textarea>
//                         </div>
//                         <div className="col-12 pt-3 mx-auto">
//                             <input
//                                 type="submit"
//                                 style={styles.button}
//                                 value="Send Message"
//                                 onMouseOver={(e) => e.target.style.backgroundColor = styles.buttonHover.backgroundColor}
//                                 onMouseOut={(e) => e.target.style.backgroundColor = styles.button.backgroundColor}
//                             />
//                         </div>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
// }




import emailjs from "emailjs-com";
import React from 'react';

// Define inline styles
const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // height: '100vh',
    padding: '1rem',
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

export default function ContactUs() {

    function sendEmail(e) {
        e.preventDefault();
        const emailCode = import.meta.env.VITE_EMAIL_JS_CODE;
        emailjs.sendForm('contact_service', emailCode, e.target, 'VHZAaHAmIZgTxUswy')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    }

    return (
          <div id="upcoming-events" className="text-center mt-10">
      <div className="container">
        <div className="section-title mt-10">
        <h2>Contact The Author</h2>
      </div>
        <div style={styles.container}>
            
            <div style={styles.form}>
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
            </div>
        </div>
        </div>
        </div>
    );
}

