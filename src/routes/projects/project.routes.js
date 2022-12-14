const {
  createProject,
  allProject,
  findOneProject
} = require("../../controllers/projects/project");

module.exports = (app) => {
  app.post("/create-project", createProject);
  app.get("/projects", allProject);
  app.get("/project/:id",findOneProject)
};
