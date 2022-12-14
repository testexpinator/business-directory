const { addRating, reviews } = require("../../models/reviews/review.model");

// create review
exports.createReview = async (req, res) => {
  try {
    let user = req.body;
    let input = {
      ...user,
    };
    let response = await addRating(input);
    // handlre response
    if (response) {
      res.send({ status: true, message: "Rating create", data: response });
    } else {
      res.send({ status: false, message: "Rating not create", data: [] });
    }
  } catch (error) {
    console.log(error);
    res.send({ status: false, message: "Server error" });
  }
};

// get review data
exports.reviewList = async (req, res) => {
  try {
    let response = await reviews();
    // handlre response
    if (response) {
      res.send({ status: true, message: "review list found", data: response });
    } else {
      res.send({ status: false, message: " review list not found", data: [] });
    }
  } catch (error) {
    console.log(error);
    res.send({ status: false, message: "Server error" });
  }
};
