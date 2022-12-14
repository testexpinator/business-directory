const { loginData } = require("../../models/auth/login.model");
const { generateToken } = require("../../config/auths");
var SHA256 = require("crypto-js/sha256");

exports.userLogin = async (req, res) => {
  console.log(req.body);

  try {
    const input = req.body;
    console.log("ddd", input.password);

    // Convert recived password To encryed string()
    const encodedPassword = SHA256(req.body.password);
    let encMes = encodedPassword.words.toString();

    console.log({ input });
    console.log({ encMes });
    console.log({ encodedPassword });

    // update the input password to encrypted format.
    encMes = input.password;

    // Get date of user if already present.
    const result = await loginData(input);
    console.log({ result });
    const loggedUser = result?.loggedUser;
    console.log({ loggedUser });

    // Generate token with User Object _id
    let token = loggedUser ? generateToken(loggedUser._id) : "none";

    let data = {
      ...loggedUser,
      token,
    };

    console.log({ loggedUser });

    res.set({
      token: token,
    });

    if (result.status) {
      res.send({
        status: true,
        message: "Sucessfully Login",
        data: data,
      });
    } else {
      res.send({ status: false, message: result.message });
    }
  } catch (error) {
    console.log(error);
    res.send({ status: false, message: error.message, data: {} });
  }
};
