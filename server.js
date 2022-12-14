const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const port = 3005;


app.use(express.json());
app.use(cors());

// conntection to database
mongoose.Promise = global.Promise;
mongoose
  .connect(
    "mongodb+srv://homeservice:expinator504@homeservice.jnkxr.mongodb.net/business-directory",
    {
      useNewUrlParser: true,
    }
  )
  .then(() => {
    console.log("Successfully connected to the database");
  })
  .catch((err) => {
    console.log("Could not connect to the database. Exiting now...", err);
    process.exit();
  });



// define route files
require("./src/routes/user.routes")(app)
require("./src/routes/review/review.routes")(app)
require("./src/routes/services/service.route")(app)
require("./src/routes/auths/login.route")(app)
require("./src/routes/company/company.routes")(app)
require("./src/routes/projects/project.routes")(app)


// listen server
app.listen(port, () => {
  console.log(`App listening on port ${port}!`);
});