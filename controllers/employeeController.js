const employee = require("../models/employee");
const EmployeeModel = require("../models/employee");

// get all employees
exports.getEmployees =  (req, res,next) => {
    EmployeeModel.find()
    .then((employee) => {
        res.send(employee);
    })
    .catch((err) => {
        console.log(err);
        next(err);
    });
}

// register employee
exports.registerEmployee = (req, res, next) => {
    const employee = new EmployeeModel(req.body);
    employee.save()
    .then((employee) => {
        res.send({
            message: "Employee created successfully",
            employee_id: employee._id
        });
    })
    .catch((err) => {
        console.log(err);
        next(err);
    });
   
}

// get employee details
exports.getEmployeeDetails = (req, res,next) => {
   const id = req.params.id;
   employee.findById(id)
   .then((employee) => {
       res.send(employee);
   })
   .catch((err) => {
       console.log(err);
       next(err);
   });
}

exports.updateEmployee = (req, res, next) => {
    const id = req.params.id;
    req.body.updated_at = Date.now();

    employee.findByIdAndUpdate(id, req.body)
    .then((employee) => {
        res.send({ message: "Employee detailed updated successfully"});
    })
    .catch((err) => {
        console.log(err);
        next(err);
    });
};

exports.deleteEmployee= (req, res, next) => {
    const id = req.query.eid;
    employee.findByIdAndDelete(id)
    .then((employee) => {
        res.send({ message: "Employee deleted successfully"});  
    })
    .catch((err) => {
        console.log(err);
        next(err);
    });
}; 
