const mongoose = require("mongoose");

const user = new mongoose.Schema(
  {
    name: { type: String, default: "none" },
    email: { type: String, default: "none" },
    pasword : { type: String, default: "none" },
    contact: { type: String, default: "none" },
    address: { type: String, default: "none" },
    isAdmin : {type : Boolean , default : false},
    project: [{ type: mongoose.Types.ObjectId, ref: "projects" }],
    favourite: [
      { type: mongoose.Types.ObjectId, ref: "comapny", default: "none" },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("user", user);
