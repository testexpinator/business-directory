const {
  addCompany,
  allCompany,
} = require("../../models/company/company.model");

exports.CreateCompany = async (req, res) => {
  try {
    let company = req.body;
    let input = {
      ...company,
    };
    let response = await addCompany(input);
    console.log(input);
    if (response) {
      res.send({ status: true, message: "company create", data: response });
    } else {
      res.send({ status: false, message: "company not create", data: [] });
    }
  } catch {
    res.send({ status: false, message: "Server error" });
  }
};

exports.getCompany = async (req, res) => {
  try {
    let company = req.body;
    let input = {
      ...company,
    };
    let response = await allCompany(input);
    console.log(input);
    if (response) {
      res.send({ status: true, message: "company list found", data: response });
    } else {
      res.send({ status: false, message: "company not list found  ", data: [] });
    }
  } catch {
    res.send({ status: false, message: "Server error" });
  }
};
