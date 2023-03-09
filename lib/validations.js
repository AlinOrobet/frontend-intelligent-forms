const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegexOneDigit = /^(?=.*[0-9])/;
const passwrodRegexSpecialCaracter = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
const passwordRegexForLetters = /.{8,32}/;

export function userAccount_validate(userData) {
  const errors = {};
  const emailVar = userData.UserAccount.email;
  const atIndex = emailVar.indexOf("@");
  const domain = emailVar.slice(atIndex + 1);
  if (!emailVar) {
    errors.email = "Email address is required!";
  } else if (emailVar.includes(" ")) {
    errors.email = "Email address cannot contain spaces!";
  } else if (!emailRegex.test(emailVar)) {
    errors.email = "Email address must be correctly formatted!";
  } else if (emailVar.length > 254) {
    errors.email = "Email address is too long!";
  } else if (emailVar.length < 5) {
    errors.email = "Email address is too short!";
  } else if (emailVar.indexOf("@") === -1) {
    errors.email = "Email address does not contain the @ symbol!";
  } else if (emailVar.split("@").length > 2) {
    errors.email = "Email address contains more than one @ symbol!";
  } else if (emailVar.charAt(atIndex + 1) === ".") {
    errors.email = "Email address contains a dot after the @ symbol!";
  } else if (domain.length === 0) {
    errors.email = "Domain is missing in the email address!";
  } else if (!/^[^\s@]+\.[^\s@]+$/.test(domain)) {
    errors.email = "Invalid domain in the email address!";
  } else if (emailVar === "alin.orobet@student.usv.ro") {
    errors.email = "Email address is already registered in the system!";
  }
  const passwordVar = userData.UserAccount.password;
  if (!passwordVar) {
    errors.password = "Password is required!";
  } else if (passwordVar.includes(" ")) {
    errors.password = "Password cannot contain spaces!";
  } else if (!passwordRegexOneDigit.test(passwordVar)) {
    errors.password = "Password must contain at least one number!";
  } else if (!passwrodRegexSpecialCaracter.test(passwordVar)) {
    errors.password = "Password must contain at least one special character!";
  } else if (!passwordRegexForLetters.test(passwordVar)) {
    errors.password = "Password must have between 8 and 32 characters!";
  } else if (passwordVar === emailVar) {
    errors.password = "Password cannot be the same as email address!";
  }
  const confirmPasswordVar = userData.UserAccount.confirmPassword;
  if (!confirmPasswordVar) {
    errors.confirmPassword = "Confirm password is required!";
  } else if (confirmPasswordVar !== "" && passwordVar !== confirmPasswordVar) {
    errors.confirmPassword = "Confirm password must match password!";
  }
  const typeOfUserVar = userData.UserAccount.typeOfUser;
  if (!typeOfUserVar) {
    errors.typeOfUser = "You must select an option!";
  } else if (typeOfUserVar === "Choose a type of account") {
    errors.typeOfUser = "You must select an option!";
  }

  return errors;
}
export function userDetails_validate(userData) {
  const errors = {};
  const entityNameVarU = userData.UserDetails.entityName;
  if (!entityNameVarU) {
    errors.entityNameU = "Entity name is required!";
  }
  const addressVar = userData.UserDetails.address;
  if (!addressVar) {
    errors.addressU = "Address is required!";
  }
  const typeOfSubscriptionVar = userData.UserDetails.typeOfSubscription;
  if (!typeOfSubscriptionVar) {
    errors.typeOfSubscriptionU = "You must select an option!";
  }
  return errors;
}
export function companyDetails_validate(userData) {
  const errors = {};
  // ------------------------------------------------------
  const entityNameVarC = userData.CompanyDetails.entityName;
  if (!entityNameVarC) {
    errors.entityNameC = "Entity name is required!";
  }
  const fiscalCodeVar = userData.CompanyDetails.fiscalCode;
  const fiscalCodeRegex = /^[A-Z0-9]+$/;
  const fiscalCodeFirst3Chars = fiscalCodeVar.slice(0, 3);
  const fiscalCodeAlphabetRegex = /^[A-Z]+$/;
  const year = parseInt(fiscalCodeVar.slice(6, 8));
  const month = parseInt(fiscalCodeVar.slice(8, 10));
  const day = parseInt(fiscalCodeVar.slice(10, 12));
  const controlCode = fiscalCodeVar.slice(15);
  const evenChars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const oddChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let sum = 0;
  for (let i = 0; i < 15; i++) {
    const char = fiscalCodeVar.charAt(i);
    if (i % 2 === 0) {
      sum += evenChars.indexOf(char);
    } else {
      sum += oddChars.indexOf(char);
    }
  }
  const remainder = sum % 26;
  const controlChar = oddChars.charAt(remainder);
  if (!fiscalCodeVar) {
    errors.fiscalCode = "Fiscal code is required!";
  }
  // } else if (fiscalCodeVar.length !== 16) {
  //   errors.fiscalCode = "Fiscal code has wrong length!";
  // } else if (!fiscalCodeRegex.test(fiscalCodeVar)) {
  //   errors.fiscalCode = "Fiscal code contains invalid characters!";
  // } else if (!fiscalCodeAlphabetRegex.test(fiscalCodeFirst3Chars)) {
  //   errors.fiscalCode = "First 3 characters must be alphabetic letters!";
  // } else if (year < 0 || year > 99) {
  //   errors.fiscalCode = "Birth year is invalid!";
  // } else if (month < 1 || month > 12) {
  //   errors.fiscalCode = "Birth month is invalid!";
  // } else if (day < 1 || day > 31) {
  //   errors.fiscalCode = "Birth day is invalid!";
  // } else if (controlChar !== controlCode) {
  //   errors.fiscalCode = "Control code is invalid!";

  const addressVarC = userData.CompanyDetails.address;
  if (!addressVarC) {
    errors.addressC = "Address is required!";
  }
  const typeOfSubscriptionVarC = userData.CompanyDetails.typeOfSubscription;
  if (!typeOfSubscriptionVarC) {
    errors.typeOfSubscriptionC = "You must select an option!";
  } else if (typeOfSubscriptionVarC === "Choose a type of subscription") {
    errors.typeOfSubscriptionC = "You must select an option!";
  }
  return errors;
}
