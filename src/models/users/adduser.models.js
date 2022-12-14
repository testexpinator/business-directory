const user = require("../../schema/user.schema");

exports.addUsers = async (input) => {
  try {
    let newUser = new user(input);
    let res = await newUser.save();
    if (res) {
      return res;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
    return false;


  }
};
