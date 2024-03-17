const express = require("express");

const { getAllEmployee, registerEmployeeController, deleteEmployeeController, updateEmployeeController } = require("../controller/employeeController");

const router=express.Router()
// GET || all blogs
router.get("/all-employee", getAllEmployee);

//POST || create blog
router.post("/create-employee", registerEmployeeController);

//PUT || update blog
router.put("/update-employee/:id", updateEmployeeController);


// DELETE || delete blog
router.delete("/delete-employee/:id", deleteEmployeeController);

module.exports=router