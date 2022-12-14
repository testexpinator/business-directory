const mongoose = require("mongoose");

const Service = new mongoose.Schema(
  {
    serviceType: { type: String, default: "none" },
    description: { type: String, default: "none" },
    image: { type: String, default: "none" },
    contact: { type: String, default: "none" },
    company: { type: String, default: "none" },
    address: { type: String, default: "none" },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("service", Service);
