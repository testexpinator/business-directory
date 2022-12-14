const Company = require("../../schema/company.schema");

exports.addCompany = async (input) => {
  
  try {
    let company = new Company(input);
    let newComapany = await company.save();
    if (newComapany) {
      return newComapany;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
    return false;
  }
};

exports.allCompany = async () => {
  try {
    let lists = await Company.find();
    if (lists.length > 0) {
      return lists;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
  }
};
