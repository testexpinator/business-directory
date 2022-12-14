const {
  addService,
  allServices,
} = require("../../models/services/service.model");

// create services
exports.createService = async (req, res) => {
  console.log(req.body);
  try {
    let user = req.body;
    let input = {
      ...user,
    };
    let response = await addService(input);
    // handlre response
    if (response) {
      res.send({ status: true, message: "Service create", data: response });
    } else {
      res.send({ status: false, message: "Service not create", data: [] });
    }
  } catch (error) {
    console.log(error);
    res.send({ status: false, message: "Server error" });
  }
};

// get services
exports.serviceList = async (req, res) => {
  try {
    let response = await allServices();
    // handlre response
    if (response) {
      res.send({ status: true, message: "Service list found", data: response });
    } else {
      res.send({ status: false, message: " Service list not found", data: [] });
    }
  } catch (error) {
    console.log(error);
    res.send({ status: false, message: "Server error" });
  }
};

// get single service
exports.serviceById = async (req, res) => {
  console.log(req.params.id);
  try {
    let serviceId = req.params.id;
    let input = {
      serviceId,
    };
    let response = await singleService(input);
    if (response) {
      res.send({status : "true" ,message : "service found" ,data : response});
    } else {
      res.send({status : "false" ,message : "service not found" , data : []});

    }
  } catch (error) {
res.send({status : "false", message :"server error "})
  }
};
