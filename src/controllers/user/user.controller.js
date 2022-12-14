const { addUsers } = require("../../models/users/adduser.models");
const {
  userList,
  getOne,
  updateUser,
  deleteOne,
} = require("../../models/users/userList.model");

// create user
exports.user = async (req, res) => { 
  try {
    let user = req.body;
    let input = {
      ...user,
    };
    let response = await addUsers(input);
    // handlre response
    if (response) {
      res.send({ status: true, message: "User Create", data: response });
    } else {
      res.send({ status: false, message: "User not Create", data: [] });
    }
  } catch (error) {
    console.log(error);
    res.send({ status: false, message: "Server error" });
  }
};

// get user all list
exports.userList = async (req, res) => {
  console.log(req.body);
  try {
    let user = req.body;
    let input = {
      ...user,
    };
    let response = await userList(input);
    // handlre response
    if (response) {
      res.send({ status: true, message: "User list found", data: response });
    } else {
      res.send({ status: false, message: "User list not found", data: [] });
    }
  } catch (error) {
    console.log(error);
    res.send({ status: false, message: "Server error" });
  }
};

// get one
exports.getSingleUser = async (req, res) => {
  console.log(req.params.id);
  try {
    let input = {
      userId: req.params.id,
    };
    console.log({ input });

    let response = await getOne(input);

    if (response) {
      res.send({ status: true, message: "user found", data: response });
    } else {
      res.send({ status: false, message: "User not found", data: [] });
    }
  } catch (error) {
    res.send({ status: true, message: "server error" });
  }
};

// update user
exports.updateUser = async (req, res) => {
  try {
    let input = {
      userId: req.params.id,
    };
    let response = await updateUser(input, req.body);
    if (response) {
      res.send({ status: true, message: "user update", data: response });
    } else {
      res.send({ status: false, message: "user not update", data: [] });
    }
  } catch (error) {
    res.send({ status: false, message: "server error" });
  }
};

// delete user
exports.deleteUser = async (req, res) => {
  try {
    let input = {
      userId: req.params.id,
    };
    console.log({ input });

    let response = await deleteOne(input);

    if (response) {
      res.send({ status: true, message: "user deleted"   });
    } else {
      res.send({ status: false, message: "User not found", data: [] });
    }
  } catch (error) {
    res.send({ status: true, message: "server error" });
  }
};
