export const validateEmail = (email) => {
  // Check if email ends with @bristol.ac.uk
  const emailRegex = /^[a-zA-Z0-9._-]+@bristol.ac.uk$/;
  if (!emailRegex.test(email)) {
    return "Email must end with @bristol.ac.uk";
  }
};

export const validatePassword = (password) => {
  if (password.length < 8) {
    return "Password must be at least 8 characters long";
  } else if (!/[A-Z]/.test(password)) {
    return "Password must contain at least 1 uppercase letter";
  } else if (!/[a-z]/.test(password)) {
    return "Password must contain at least 1 lowercase letter";
  } else if (!/[0-9]/.test(password)) {
    return "Password must contain at least 1 digit";
  } else if (/[!@#$%^&*]/.test(password)) {
    return "Password must contain at least 1 special character in !@#$%^&*";
  }
};
