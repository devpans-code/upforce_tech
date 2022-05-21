import React from 'react'
import { Form } from 'react-bootstrap'

const FormComponent = ({
  firstName,
  errFirstName,
  verifyFirstName,
  lastName,
  errLastName,
  verifyLastName,
  userName,
  errUsername,
  verifyUsername,
  email,
  errEmail,
  verifyEmail,
  password,
  errPassword,
  verifyPassword,
  accept,
  errAccept,
  verifyPolicy
}) => {
  return (
    <>
      <Form.Group className="mb-3">
        <Form.Label>First name*</Form.Label>
        <Form.Control type="text" name="first_name" value={firstName} onChange={(e) => verifyFirstName(e.target.value)} placeholder="First name" />
        {!errFirstName?.valid && <span className="err-msg">{errFirstName?.msg}</span>}
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Last name*</Form.Label>
        <Form.Control type="text" name="last_name" value={lastName} onChange={(e) => verifyLastName(e.target.value)} placeholder="Last name" />
        {!errLastName?.valid && <span className="err-msg">{errLastName?.msg}</span>}
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Username*</Form.Label>
        <Form.Control type="test" name="user_name" value={userName} onChange={(e) => verifyUsername(e.target.value)} placeholder="username" />
        {!errUsername?.valid && <span className="err-msg">{errUsername?.msg}</span>}
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Email address*</Form.Label>
        <Form.Control type="email" name="email" value={email} onChange={(e) => verifyEmail(e.target.value)} placeholder="email" />
        {!errEmail?.valid && <span className="err-msg">{errEmail?.msg}</span>}
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Password*</Form.Label>
        <Form.Control type="password" name="password" value={password} onChange={(e) => verifyPassword(e.target.value)} placeholder="Password" />
        {!errPassword?.valid && <span className="err-msg">{errPassword?.msg}</span>}
      </Form.Group>
      <Form.Group className="mb-3 t-align">
        <Form.Check
          type="checkbox"
          onChange={(e) => verifyPolicy(e.target.checked)}
          label="I agree to the Term and Conditions"
          checked={accept}
        /><br />
        {!errAccept?.valid && <span className="err-msg">{errAccept?.msg}</span>}
      </Form.Group>
    </>
  )
}

export default FormComponent
