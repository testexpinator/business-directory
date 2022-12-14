const user = require("../../schema/user.schema");

// users list
exports.userList = async (input) => {
  console.log("i am form user list");
  try {
    let lists = await user.find();
    if (lists.length > 0) {
      return lists;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
  }
};

// get one user

exports.getOne = async (input) => {
  try {
    let match = { _id: input.userId };
    data = await user.findOne(match);

    if (data) {
      return data;
    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
};

exports.updateUser = async (input, body) => {
  try {
    let match = { _id: input.userId };
    console.log(match);

    let updateResponse = await user.updateOne(match, {
      $set: body,
    });

    console.log(updateResponse);
    if (updateResponse) {
      return body;
    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
};

// delete one
exports.deleteOne = async (input) => {
  try {
    let match = { _id: input.userId };
    data = await user.deleteOne(match);

    if (data) {
      return data;
    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
};
