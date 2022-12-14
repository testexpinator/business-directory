const mongoose = require("mongoose");

const review = new mongoose.Schema(
  {
    OverallRating: { type: Number, default: 0 },

    Service: { type: Number, default: 0 },
    Responsiveness: { type: Number, default: 0 },
    Expertise: { type: Number, default: 0 },
    Results: { type: Number, default: 0 },
    Communication: { type: Number, default: 0 },
    contractor: { type: String, default: "none" },
    subContractor: { type: String, default: "none" },
    serviceType: { type: String, default: "none" },
    description: { type: String, default: "none" },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("review", review);
// Company data is extracted from web using a bot.
// The system will need to check the file and upload any changes detected on a periodic basis
