import React from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import CustomForm from "./CustomForm";

const MailchimpFormContainer = (props) => {
  const MAILCHIMP_U = import.meta.env.VITE_REACT_APP_MAILCHIMP_U;
  const first_id = import.meta.env.VITE_REACT_APP_MAILCHIMP_ID_ONE;
  const second_id = import.meta.env.VITE_REACT_APP_MAILCHIMP_ID_TWO;

  const url = `https://gmail.us1.list-manage.com/subscribe/post?u=${MAILCHIMP_U}&amp;id=${first_id}&amp;f_id=${second_id}`;

  return (
    <div className="mc__form-container">
      <MailchimpSubscribe
        url={url}
        render={({ subscribe, status, message }) => (
          <CustomForm
            status={status}
            message={message}
            onValidated={(formData) => subscribe(formData)}
          />
        )}
      />
    </div>
  );
};

export default MailchimpFormContainer;
