import React from "react";

import MailchimpSubscribe from "react-mailchimp-subscribe";

const MAILCHIMP_U = import.meta.env.VITE_REACT_APP_MAILCHIMP_U;
const first_id = import.meta.env.VITE_REACT_APP_MAILCHIMP_ID_ONE;
const second_id = import.meta.env.VITE_REACT_APP_MAILCHIMP_ID_TWO;

const url = `https://gmail.us1.list-manage.com/subscribe/post?u=${MAILCHIMP_U}&amp;id=${first_id}&amp;f_id=${second_id}`;

// simplest form (only email)
const SimpleForm = () => <MailchimpSubscribe url={url} />;

export default SimpleForm;

// use the render prop and your custom form
const CustomForm = () => (
  <MailchimpSubscribe
    url={url}
    render={({ subscribe, status, message }) => (
      <div>
        <SimpleForm onSubmitted={(formData) => subscribe(formData)} />
        {status === "sending" && (
          <div style={{ color: "blue" }}>sending...</div>
        )}
        {status === "error" && (
          <div
            style={{ color: "red" }}
            dangerouslySetInnerHTML={{ __html: message }}
          />
        )}
        {status === "success" && (
          <div style={{ color: "green" }}>Subscribed !</div>
        )}
      </div>
    )}
  />
);
