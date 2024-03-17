const employeeModel = require("../models/employeeModel");

// get all employees
exports.getAllEmployee=async(req,res)=>{
    try {
        const employees=await employeeModel.find({});
        return res.status(200).send({
            employeeCount:employees.length,
            success:true,
            message:'all employees data',
            employees
        });
        
    } catch (error) {
        console.log(error);
        return res.status(500).send({
            success:false,
            message:"Error in get all employees",
            error
        })
        
    }
};


// create employees

exports.registerEmployeeController=async(req,res)=>{
    try {
        const{employeeId,employeeName,email,img,designation,phone,location,experience}=req.body;
        // validation
        if (!employeeName || !email ){
            return res.status(400).send({
                success:false,
                message:"Plese fill all field"
            })
        }
        // exisiting employee
        const exisitingemployee=await employeeModel.findOne(({email}));
        if (exisitingemployee){
            return res.status(401).send({
                seccess:false,
                message:"employee already exisits"
            })
        }
        
        // employee save
        const employee=new employeeModel({employeeName,email,phone,img,designation,phone,location,experience,employeeId})
        await employee.save()
        return res.status(201).send({
            success:true,
            message:"new employee created",
            employee
        })
        
    } catch (error) {
        console.log(error)
        return res.status(500).send({
            message:"error in register callback",
            success:false,
            error
        })   
    }
};


exports.updateEmployeeController = async (req, res) => {
    try {
      const { id } = req.params;
      const { employeeId,employeeName,email } = req.body;
      const employee = await employeeModel.findByIdAndUpdate(
        id,
        { ...req.body },
        { new: true }
      );
      return res.status(200).send({
        success: true,
        message: "employee Updated!",
        employee,
      });
    } catch (error) {
      console.log(error);
      return res.status(400).send({
        success: false,
        message: "Error WHile Updating employee",
        error,
      });
    }
  };

//Delete Blog
exports.deleteEmployeeController = async (req, res) => {
    const name=req.params.name;
    try{
      const doc= await employeeModel.findOneAndDelete({"employeeName":name})
    //   res.status(201).json(doc)
    return res.status(200).send({
            success: true,
            message: "Employee  Deleted!",
    })
    }
    
    catch (error) {
      console.log(error);
      return res.status(400).send({
        success: false,
        message: "Erorr WHile Deleteing BLog",
        error,
      });
    }
  };