const {
  createService,
  serviceList,
  serviceById,
} = require("../../controllers/services/service");

module.exports = (app) => {
  app.post("/service/create", createService);
  app.get("/services", serviceList);
  app.get("/service/:id", serviceById);
};
