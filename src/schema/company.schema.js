const mongoose = require("mongoose");

const Company = new mongoose.Schema(
  {
    name: { type: String, default: "none" },
    services: { type: String, default: "none" },
    businessStreetAddress: { type: String, default: "none" },
    officeAddress: { type: String, default: "none" },
    uenIssueDate: { type: String, default: "none" },
    // projects: [
    //   { type: mongoose.Types.ObjectId, ref: "projects", default: "none" },
    // ],
    incorporationDate: { type: String, default: "none" },
    directoryReferenceNo: { type: String, default: "none" },
    caseTrust: { type: String, default: "none" },
    businessOwnerName: { type: String, default: "none" },
    applicationExpiryDate: { type: String, default: "none" },
    typeOfWorks: { type: String, default: "none" },
    accumaltedDemeritPoints: { type: String, default: "none" },
    infrigmentHistory: { type: String, default: "none" },
    paragraphAboutCompany: { type: String, default: "none" },
    webAddress: { type: String, default: "none" },
    facebook: { type: String, default: "none" },
    linkedIn: { type: String, default: "none" },
    instagram: { type: String, default: "none" },
    uen: { type: String, default: "none" },
    address: { type: String, default: "none" },
    status: { type: String, default: "none" },
    industry: { type: String, default: "none" },
    location: { type: String, default: "none" },
    review: { type: Number, default: 0 },
    url: { type: String, default: "none" },
    // rating: { type: mongoose.Types.ObjectId, ref: "review", default: "none" },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("company", Company);
