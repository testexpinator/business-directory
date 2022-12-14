// const user = require("../../schema/user.schema");
// const { generateToken } = require("../../config/auths");

// exports.userPassword = async (req, res) => {
//   // Email field recived in req body
//   let data = { email: req.body.email };
//   let email = req.body.email;
//   // console.log("dataemail", data);
//   // Find if email exist in our db
//   let user = await user.findOne(data);
//   // console.log("dataeuser", user);
//   // If forgetToken is not equal null...
//   if (user) {
//     // Generate new forgetToken
//     let token = generateToken(user._id);
//     let _id = user._id;

//     // await Person.replaceOne({ user._id }, { forgetToken: token });
//     // Recived email recived from request used to get the and update the data field.
//     // await Person.replaceOne({ _id }, { forgetToken: token });
//     user.findOneAndUpdate(
//       { _id },
//       { forgetToken: token, token: "null" },
//       function (err, docs) {
//         if (err) {
//           console.log(err);
//         } else {
//           console.log("docs", docs);
//         }
//       }
//     );

//     // Send forgetToken for verify email
//     await verifiLink(token, "Verify Email");

//     // Send responce to user if account exist.
//     res.send({
//       status: true,
//       message: "Go to your email to verify it's you...",
//     });
//   } else {
//     res.send({ status: false, message: "User not exist." });
//   }
// };
