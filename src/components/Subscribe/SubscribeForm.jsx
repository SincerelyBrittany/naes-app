import React, { useState, useEffect } from "react";
import { Container, Card, TextField, Button } from "@material-ui/core";
import InputField from "./Input";
import "./Form.css";

export default function Contact() {
  const [status, setStatus] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    email && firstName;
    setStatus("success");
    //   &&
    //   //   lastName &&
    //   email.indexOf("@") > -1 &&
    //   onValidated({
    //     EMAIL: email,
    //     MERGE1: firstName,
    //     // MERGE2: lastName,
    //   });
  };

  useEffect(() => {
    if (status === "success") clearFields();
  }, [status]);

  const clearFields = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
  };

  return (
    <Container maxWidth="sm">
      <Card>
        <form
          name="contactform"
          className="contactForm"
          data-netlify="true"
          onSubmit={(e) => handleSubmit(e)}
        >
          <input type="hidden" name="form-name" value="contact" />
          <h1 className="mc__title">
            {status === "success" ? "Success!" : "Subscribe"}
          </h1>
          <hr />
          {status === "sending" && (
            <div className="mc__alert mc__alert--sending">sending...</div>
          )}
          {status !== "success" ? (
            <div>
              <InputField
                label="First Name"
                onChangeHandler={setFirstName}
                type="text"
                value={firstName}
                placeholder="Name"
                isRequired
              />
              <InputField
                label="Email"
                onChangeHandler={setEmail}
                type="email"
                value={email}
                placeholder="your@email.com"
                isRequired
              />
            </div>
          ) : null}
          <br />
          {status === "success" ? null : (
            <InputField
              label="subscribe"
              type="submit"
              formValues={[email, firstName]}
              className="home-button-53"
            />
          )}
        </form>
        {/* <form method="POST" name="contactform" className="contactForm">
          <input type="hidden" name="form-name" value="contactForm" />

          <input type="text" name="name" placeholder="Enter your name" />

          <input type="email" name="email" placeholder="Enter your email" />

          <button type="submit">Submit</button>
        </form> */}
      </Card>
    </Container>
    // <Container maxWidth="sm">
    //   <h2>Subscribe</h2>
    //   {success && <p style={{ color: "green" }}>Thanks for your message! </p>}
    //   <Card>
    //     <form
    //       name="contact"
    //       method="POST"
    //       action="/contact/?success=true"
    //       data-netlify="true"
    //     >
    //       <input type="hidden" name="form-name" value="contact" />
    //       <TextField id="standard-basic" label="name" name="name" /> <br />
    //       <TextField id="standard-basic" label="email" name="email" /> <br />
    //       {/* <TextField
    //           multiline
    //           id="standard-multiline-static"
    //           label="message"
    //           name="message"
    //         /> */}
    //       <br />
    //       <div>
    //         <Button type="submit">Send</Button>
    //       </div>
    //     </form>
    //   </Card>
    // </Container>
  );
}
