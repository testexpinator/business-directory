const {
  user,
  userList,
  getSingleUser,
  updateUser,
  deleteUser
} = require("../controllers/user/user.controller");

module.exports = (app) => {
  app.post("/createuser", user)
 app.get("/users", userList);
  app.get("/user/:id", getSingleUser);
  app.put("/user/update/:id", updateUser);
  app.delete("/user/delete/:id", deleteUser);
};
