const validateName = (name) => {
  return name?.toString().length >= 3;
};

const validateLastName = (lastname) => {
  return lastname?.toString().length >= 3;
};

const validateBirthday = (birthdate) => {
  return birthdate?.toString().length >= 10;
};

const validateCountry = (country) => {
  return country?.toString().length >= 4;
};

const validateCity = (city) => {
  return city?.toString().length >= 4;
};

const validateEmail = (email) => {
  return email?.toString().includes(".") && email?.toString().includes("@");
};

const validatePass = (password) => {
  return password?.toString().length > 6;
};

const validateConfirm = (password, confirmPassword) => {
  return validatePass(password) && password === confirmPassword;
};

export {
  validateEmail,
  validatePass,
  validateName,
  validateCity,
  validateConfirm,
  validateLastName,
  validateBirthday,
  validateCountry,
};
