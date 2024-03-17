const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
  employeeid:{type:Number},
  employeeName: {type: String},
  img:{type:String},
  designation:{type:String},
  phone:{type:Number},
  location: {type: String},
  experience:{type:Number},
  email: {type: String, unique: true},
  mobileNo: {type: Number, unique: true},
  joinDate:{type: Date, default: Date.now()},
  createdDate: {type: Date, default: Date.now()},
  updateAt:{type:Date,default:Date.now}
});

const employeeModel = mongoose.model("Employee", employeeSchema);

module.exports = employeeModel;




