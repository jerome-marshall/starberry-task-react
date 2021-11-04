import validator from "validator";

//Default Credentials
const emailId = "test@starberry.tv";
const password = "test";

const checkCredentials = (email, pass) => {
  // validate the email
  if (validator.isEmail(email)) {
    // Check if the correct email and password is provided
    if (email === emailId && pass === password) {
      return [true, "Success"];
    } else return [false, "Please enter the correct Email ID and Password"];
  } else return [false, "Please enter a valid Email ID"];
};

export { checkCredentials };
