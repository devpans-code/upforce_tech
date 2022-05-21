const EMAIL_PATTERN = new RegExp(
  /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
);

const PHONE_PATTERN = new RegExp(/^[0-9]{10}$/);

var PASSWORD = new RegExp(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/);

export const isRequiredField = (value) => value === "";

export const isValidEmail = (email) => EMAIL_PATTERN.test(email);

export const isValidPassword = (password) => PASSWORD.test(password);

export const isValidPhone = (phone) => PHONE_PATTERN.test(phone);

export const updateState = (varState, errState, varValue, errStatus) => {
  varState(varValue);
  errState(errStatus);
}

export const validFirstName = (name) => {
  if (isRequiredField(name)) {
    return {
      valid: false,
      msg: "Please enter first name"
    }
  }

  if (name.length < 3) {
    return {
      valid: false,
      msg: "First name length should be minimun 3 char."
    }
  }

  return {
    valid: true,
    msg: "success"
  }
}

export const validLastName = (name) => {
  if (isRequiredField(name)) {
    return {
      valid: false,
      msg: "Please enter last name"
    }
  }

  if (name.length < 3) {
    return {
      valid: false,
      msg: "Last name length should be minimun 3 char."
    }
  }

  return {
    valid: true,
    msg: "success"
  }
}

export const validPolicy = (value) => {
  if (!value) {
    return {
      valid: false,
      msg: "Please accept terms and conditions"
    }
  }

  return {
    valid: true,
    msg: "success"
  }
}

export const validUsername = (name) => {
  if (isRequiredField(name)) {
    return {
      valid: false,
      msg: "Please enter username"
    }
  }

  return {
    valid: true,
    msg: "success"
  }
}

export const validEmail = (email) => {
  if (isRequiredField(email)) {
    return {
      valid: false,
      msg: "Please enter email"
    }
  }

  if (!isValidEmail(email)) {
    return {
      valid: false,
      msg: "Please enter valid email."
    }
  }

  return {
    valid: true,
    msg: "success"
  }
}

export const validPassword = (password) => {
  if (isRequiredField(password)) {
    return {
      valid: false,
      msg: "Please enter password"
    }
  }

  if (!isValidPassword(password)) {
    return {
      valid: false,
      msg: "Length should be minimum 8, and used uppercase, lowercase, special symbol, number."
    }
  }

  return {
    valid: true,
    msg: "success"
  }
}
