const {CreateCompany ,getCompany} =require("../../controllers/company/company.controller")

module.exports=(app)=>{
app.post("/create/company" , CreateCompany)
app.get("/company/list" , getCompany)
}