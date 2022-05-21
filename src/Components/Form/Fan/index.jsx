import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import FormComponent from '../FormComponent';
import { updateState, validFirstName, validLastName, validEmail, validPassword, validUsername, validPolicy } from "../Validation";

const FanComponent = () => {
  const [firstName, setFirstName] = useState();
  const [errFirstName, setErrFirstName] = useState({ valid: false, msg: "" });
  const [lastName, setLastName] = useState();
  const [errLastName, setErrLastName] = useState({ valid: false, msg: "" });
  const [username, setUserName] = useState();
  const [errUsername, setErrUsername] = useState({ valid: false, msg: "" });
  const [email, setEmail] = useState();
  const [errEmail, setErrEmail] = useState({ valid: false, msg: "" });
  const [password, setPassword] = useState();
  const [errPassword, setErrPassword] = useState({ valid: false, msg: "" });
  const [accept, setAccept] = useState(false);
  const [errAccept, setErrAccept] = useState({ valid: false, msg: "" });
  const [isDisabled, setIsDisabled] = useState(true);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    setIsDisabled(errFirstName.valid && errLastName.valid && errEmail.valid && errPassword.valid && errUsername.valid && errAccept.valid ? false : true)
  }, [errFirstName, errLastName, errEmail, errPassword, errUsername, errAccept]);

  useEffect(() => {
    resetData();
  }, [success]);

  const resetData = () => {
    setFirstName();
    setLastName();
    setEmail();
    setUserName();
    setPassword();
    setAccept(false);
    setErrUsername({ valid: false, msg: "" });
    setErrEmail({ valid: false, msg: "" });
    setErrLastName({ valid: false, msg: "" });
    setErrFirstName({ valid: false, msg: "" });
    setErrPassword({ valid: false, msg: "" });
    setErrAccept({ valid: false, msg: "" });
  }

  const verifyFirstName = (fName) => {
    let status = validFirstName(fName);
    if (!status.valid) {
      updateState(setFirstName, setErrFirstName, fName, status);
      return;
    }
    updateState(setFirstName, setErrFirstName, fName, status);
    return;
  }

  const verifyLastName = (lname) => {
    let status = validLastName(lname);
    if (!status.valid) {
      updateState(setLastName, setErrLastName, lname, status);
      return;
    }
    updateState(setLastName, setErrLastName, lname, status);
    return;
  }

  const verifyUsername = (uName) => {
    let status = validUsername(uName);
    if (!status.valid) {
      updateState(setUserName, setErrUsername, uName, status);
      return;
    }
    updateState(setUserName, setErrUsername, uName, status);
    return;
  }

  const verifyEmail = (uEmail) => {
    let status = validEmail(uEmail);
    if (!status.valid) {
      updateState(setEmail, setErrEmail, uEmail, status);
      return;
    }
    updateState(setEmail, setErrEmail, uEmail, status);
    return;
  }

  const verifyPassword = (uPassword) => {
    let status = validPassword(uPassword);
    if (!status.valid) {
      updateState(setPassword, setErrPassword, uPassword, status);
      return;
    }
    updateState(setPassword, setErrPassword, uPassword, status);
    return;
  }

  const verifyPolicy = (value) => {
    let status = validPolicy(value);
    if (!status.valid) {
      updateState(setAccept, setErrAccept, value, status);
      return;
    }
    updateState(setAccept, setErrAccept, value, status);
    return;
  }

  const submitHandler = async (e) => {
    e.preventDefault();
    let fanData = {
      first_name: firstName,
      last_name: lastName,
      username: username,
      email: email,
      password: password
    };
    const response = await axios.post("http://wren.in:3200/api/sign-up/fan", fanData);
    if (response.status !== 201) {
      alert("Somethings wants to wrong!!");
      return;
    }
    alert("Congratulations! Fan data created");
    setSuccess(true);
    resetData();
  }

  return (
    <Form className="form" onSubmit={submitHandler}>
      <Form.Label className="form-heading">Create Your Fan Account</Form.Label>
      <FormComponent
        firstName={firstName}
        errFirstName={errFirstName}
        verifyFirstName={verifyFirstName}
        lastName={lastName}
        errLastName={errLastName}
        verifyLastName={verifyLastName}
        userName={username}
        errUsername={errUsername}
        verifyUsername={verifyUsername}
        email={email}
        errEmail={errEmail}
        verifyEmail={verifyEmail}
        password={password}
        errPassword={errPassword}
        verifyPassword={verifyPassword}
        accept={accept}
        errAccept={errAccept}
        verifyPolicy={verifyPolicy}
      />
      <Button type="submit" variant="success" className="custom-button" disabled={isDisabled}>SIGN UP</Button>
    </Form>
  )
}

export default FanComponent
