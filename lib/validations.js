const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegexOneDigit = /^(?=.*[0-9])/;
const passwrodRegexSpecialCaracter = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
const passwordRegexForLetters = /.{8,32}/;

export function userAccount_validate(name, userData) {
  let error = "";
  const emailVar = userData.UserAccount.email;
  const atIndex = emailVar.indexOf("@");
  const domain = emailVar.slice(atIndex + 1);
  if (name === "email") {
    if (!emailVar) {
      error = "Email address is required!";
    } else if (emailVar.includes(" ")) {
      error = "Email address cannot contain spaces!";
    } else if (!emailRegex.test(emailVar)) {
      error = "Email address must be correctly formatted!";
    } else if (emailVar.length > 254) {
      error = "Email address is too long!";
    } else if (emailVar.length < 5) {
      error = "Email address is too short!";
    } else if (emailVar.indexOf("@") === -1) {
      error = "Email address does not contain the @ symbol!";
    } else if (emailVar.split("@").length > 2) {
      error = "Email address contains more than one @ symbol!";
    } else if (emailVar.charAt(atIndex + 1) === ".") {
      error = "Email address contains a dot after the @ symbol!";
    } else if (domain.length === 0) {
      error = "Domain is missing in the email address!";
    } else if (!/^[^\s@]+\.[^\s@]+$/.test(domain)) {
      error = "Invalid domain in the email address!";
    } else if (emailVar === "alin.orobet@student.usv.ro") {
      error = "Email address is already registered in the system!";
    }
  }
  const passwordVar = userData.UserAccount.password;
  if (name === "password") {
    if (!passwordVar) {
      error = "Password is required!";
    } else if (passwordVar.includes(" ")) {
      error = "Password cannot contain spaces!";
    } else if (!passwordRegexOneDigit.test(passwordVar)) {
      error = "Password must contain at least one number!";
    } else if (!passwrodRegexSpecialCaracter.test(passwordVar)) {
      error = "Password must contain at least one special character!";
    } else if (!passwordRegexForLetters.test(passwordVar)) {
      error = "Password must have between 8 and 32 characters!";
    } else if (passwordVar === emailVar) {
      error = "Password cannot be the same as email address!";
    }
  }
  const confirmPasswordVar = userData.UserAccount.confirmPassword;
  if (name === "confirmPassword") {
    if (!confirmPasswordVar) {
      error = "Confirm password is required!";
    } else if (confirmPasswordVar !== "" && passwordVar !== confirmPasswordVar) {
      error = "Confirm password must match password!";
    }
  }
  if (passwordVar && confirmPasswordVar && passwordVar !== confirmPasswordVar) {
    error = "Password and confirm password do not match!";
  }
  const typeOfUserVar = userData.UserAccount.typeOfUser;
  if (name === "typeOfUser") {
    if (!typeOfUserVar) {
      error = "You must select an option!";
    } else if (typeOfUserVar === "Choose a type of account") {
      error = "You must select an option!";
    }
  }

  return error;
}
export function userDetails_validate(name, userData) {
  let error = "";
  const entityNameVarU = userData.UserDetails.entityName;
  if (name === "entityName") {
    if (!entityNameVarU) {
      error = "Entity name is required!";
    }
  }
  const addressVar = userData.UserDetails.address;
  if (name === "address") {
    if (!addressVar) {
      error = "Address is required!";
    }
  }
  const typeOfSubscriptionVar = userData.UserDetails.typeOfSubscription;
  if (name === "typeOfSubscription") {
    if (!typeOfSubscriptionVar) {
      error = "You must select an option!";
    }
  }
  return error;
}
export function companyDetails_validate(name, userData) {
  let error = "";
  // ------------------------------------------------------
  const entityNameVarC = userData.CompanyDetails.entityName;
  if (name === "entityName") {
    if (!entityNameVarC) {
      error = "Entity name is required!";
    }
  }

  const fiscalCodeVar = userData.CompanyDetails.fiscalCode;
  if (name === "fiscalCode") {
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
      error = "Fiscal code is required!";
    }
    // } else if (fiscalCodeVar.length !== 16) {
    //   error = "Fiscal code has wrong length!";
    // } else if (!fiscalCodeRegex.test(fiscalCodeVar)) {
    //   error = "Fiscal code contains invalid characters!";
    // } else if (!fiscalCodeAlphabetRegex.test(fiscalCodeFirst3Chars)) {
    //   error = "First 3 characters must be alphabetic letters!";
    // } else if (year < 0 || year > 99) {
    //   error = "Birth year is invalid!";
    // } else if (month < 1 || month > 12) {
    //   error = "Birth month is invalid!";
    // } else if (day < 1 || day > 31) {
    //   error = "Birth day is invalid!";
    // } else if (controlChar !== controlCode) {
    //   error = "Control code is invalid!";
  }
  const addressVarC = userData.CompanyDetails.address;
  if (name === "address") {
    if (!addressVarC) {
      error = "Address is required!";
    }
  }

  const typeOfSubscriptionVarC = userData.CompanyDetails.typeOfSubscription;
  if (name === "typeOfSubscription") {
    if (!typeOfSubscriptionVarC) {
      error = "You must select an option!";
    } else if (typeOfSubscriptionVarC === "Choose a type of subscription") {
      error = "You must select an option!";
    }
  }
  return error;
}
