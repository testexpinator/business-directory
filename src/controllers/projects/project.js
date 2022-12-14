const {
  singleProject,
  projectList,
} = require("../../models/projects/singleProject");

// create projects according to the user

exports.createProject = async (req, res) => {
  try {
    let project = req.body;

    let input = {
      ...project,
    };

    let response = await singleProject(input);
    if (response) {
      res.send({ status: true, message: "project create", data: response });
    } else {
      res.send({ status: false, message: "project not  create", data: [] });
    }
  } catch (error) {
    console.warn({ error });
    res.send({ status: false, message: "server error" });
  }
};

// list of projects

exports.allProject = async (req, res) => {
  try {
    let project = req.body;

    let input = {
      ...project,
    };

    let response = await projectList(input);
    if (response) {
      res.send({ status: true, message: "project list found", data: response });
    } else {
      res.send({ status: false, message: "project list not found", data: [] });
    }
  } catch (error) {
    console.warn({ error });
    res.send({ status: false, message: "server error" });
  }
};

// find single
exports.findOneProject = (req, res) => {
  try {
    let projectId = req.params.id;
    console.warn({ projectId });
  } catch (error) {
    console.warn({ projectId });
  }

  console.warn("khkj");
};
