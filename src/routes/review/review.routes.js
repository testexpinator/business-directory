const {createReview ,reviewList} =require("../../controllers/review/review.controller")

module.exports = (app) => {
    app.post("/review/create", createReview)
    app.get("/review/list" , reviewList)
  };
  