const mongoose = require("mongoose");

const project = new mongoose.Schema(
  {
    projectName: { type: String, default: "none" },
    type: { type: String, default: "none" },
    description: { type: String, default: "none" },
    reviews: { type: Number, default: 0 },
    // userId:{ type: mongoose.Types.ObjectId, ref: "user", default: "none" },
    company: { type: mongoose.Types.ObjectId, ref: "company", default: "none" },
    company: { type: String, default: "none" },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("projects", project);
