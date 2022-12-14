// const user = require("../../schema/user.schema");
// // const { generateToken } = require("../../config/auths");

// exports.changePassword = async (input, token) => {
//   try {
//     let check = {
//       email: input.email,
//     };
//     let userData = await user.findOne(check);

//     // if user not present in database create one.
//     if (!userData) {
//       let newSignup = new user({ ...input, token: token });
//       let savedSignup = await newSignup.save();

//       // Responde user data if sucessfully created.
//       if (savedSignup) {
//         return { status: true, savedSignup: savedSignup };
//       }
//     } else {
//       // User already present - Error message
//       return { status: false, message: "already present please go for login" };
//     }
//   } catch (error) {
//     return { status: false, message: error.meassage };
//   }
// };
