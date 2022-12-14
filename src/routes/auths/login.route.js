const { userLogin } = require("../../controllers/auth/login");

module.exports = (app) => {
  app.post("/login", userLogin);
};
