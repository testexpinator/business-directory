const review = require("../../schema/review.schema");

exports.addRating = async (input) => {
    console.log(input)
  try {
    const rating = new review(input);
    let newRating = await rating.save();
    if (newRating) {
      return newRating;
    } else {
    
      return false;
    }
  } catch (error) {
    console.log(error)
    return false;
  }
};


// review list

exports.reviews =async()=>{
    try {
        let lists = await review.find();
        if (lists.length > 0) {
          return lists;
        } else {
          return false;
        }
      } catch (error) {
        console.log(error);
      }
}
