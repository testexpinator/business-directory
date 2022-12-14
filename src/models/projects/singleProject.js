const projects = require("../../schema/project.schema");

exports.singleProject = async (input) => {
  try {
    let newProjects = new projects(input);
    let res = await newProjects.save();
    console.warn(res);

    if (res) {
      return res;
    } else {
      return true;
    }
  } catch (error) {
    console.warn(error);
  }
};

exports.projectList = async () => {
  try {
    let resp = await projects.find().populate("company");
    console.log(resp);
    if (resp.length > 0) {
      return resp;
    } else {
      return true;
    }
  } catch (error) {
    console.warn(error);
  }
};
