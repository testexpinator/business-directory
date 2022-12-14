const Service = require("../../schema/services.schema");

exports.addService = async (input) => {
  console.log({ input });
  try {
    let service = new Service(input);
    let response = await service.save();
    if (response) {
      return response;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
    return false;
  }
};

exports.allServices = async () => {
  try {
    let lists = await Service.find();
    if (lists.length > 0) {
      return lists;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
  }
};
