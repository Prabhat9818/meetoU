const express = require("express");

const { getAllEmployee, registerEmployeeController, deleteEmployeeController, updateEmployeeController } = require("../controller/employeeController");

const router=express.Router()
// GET || all employee
router.get("/employee", getAllEmployee);

//POST || create employee
router.post("/employee", registerEmployeeController);

//PUT || update employee
router.put("/employee/:id", updateEmployeeController);


// DELETE || delete employee
router.delete("/employee/:id", deleteEmployeeController);

module.exports=router
