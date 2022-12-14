const user = require("../../schema/user.schema");

exports.loginData = async (input) => {
  console.log("assas");
  try {
    // getting user details for login.
    let check = {
      email: input.email,
      password: input.password,
    };

    // Query db for login
    let loggedUser = await user.findOne(check);
    console.log("loggedUser from user", loggedUser);

    // User credentials match check and response.
    if (loggedUser) {
      return { status: true, loggedUser: loggedUser };
    } else {
      return { status: false, message: "username or password doesn't match" };
    }
  } catch (error) {
    return { status: false, message: error.message };
  }
};
