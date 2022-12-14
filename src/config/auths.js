const jwt = require("jsonwebtoken");

exports.generateToken = (userid) => {
  token = jwt.sign({ ssid: userid }, "secret", {
    expiresIn: 86400,
  });
  return token;
};
