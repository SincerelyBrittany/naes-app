import React, { useState, useEffect } from "react";
// import "./mcFormStyles.scss";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import InputField from "./Input";
import { Container } from "react-bootstrap";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
  useTheme,
  useMediaQuery,
  Box,
} from "@material-ui/core";

// const useStyles = makeStyles((theme) => ({
//   sideBySide: {
//     display: "flex",
//     flexDirection: "row",
//   },
// }));

const CustomForm = ({ status, message, onValidated }) => {
  // const classes = useStyles();
  //   const { modalOpen, setModalOpen } = useGHStContext();

  // .side-by-side {
  //   display: flex;
  //   flex-direction: row;
  // }

  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    email &&
      firstName &&
      //   lastName &&
      email.indexOf("@") > -1 &&
      onValidated({
        EMAIL: email,
        MERGE1: firstName,
        // MERGE2: lastName,
      });
  };

  useEffect(() => {
    if (status === "success") clearFields();
    if (status === "success") clearFields();
  }, [status]);

  const clearFields = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
  };

  return (
    <Container>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <form className="mc__form" onSubmit={(e) => handleSubmit(e)}>
          <h3 className="mc__title">
            {status === "success"
              ? "Success!"
              : "Join my email list for future updates."}
          </h3>
          {status === "sending" && (
            <div className="mc__alert mc__alert--sending">sending...</div>
          )}

          {/*
        {status === "error" && (
          <div
            className="mc__alert mc__alert--error"
            dangerouslySetInnerHTML={{ __html: message }}
          />
        )}
        {status === "success" && (
          <div
            className="mc__alert mc__alert--success"
            dangerouslySetInnerHTML={{ __html: message }}
          />
        )}{" "}
        */}
          {status !== "success" ? (
            <div>
              <InputField
                label="First Name"
                onChangeHandler={setFirstName}
                type="text"
                value={firstName}
                placeholder="Jane"
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
          {/*Close button appears if form was successfully sent*/}
          {status === "success" ? null : (
            <InputField
              label="subscribe"
              type="submit"
              formValues={[email, firstName]}
            />
          )}
        </form>
      </Box>
    </Container>
  );
};

export default CustomForm;
