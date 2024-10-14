const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/employeeController');

// get all employees
router.get('/employees', employeeController.getEmployees);

// register employee
router.post('/employees', employeeController.registerEmployee);

// employee details
router.get('/employees/:id', employeeController.getEmployeeDetails);

// update employee
router.put('/employees', employeeController.updateEmployee);

// delete employee
router.delete('/employees', employeeController.deleteEmployee);

module.exports = router;