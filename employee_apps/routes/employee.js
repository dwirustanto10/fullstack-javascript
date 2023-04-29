const employeeRoute = require('express').Router();
const EmployeeController = require('../controller/EmployeeController');

employeeRoute.get('/', EmployeeController.getEmployee);

employeeRoute.get('/create', EmployeeController.create);

employeeRoute.get('/delete/:id', EmployeeController.getDelete);

employeeRoute.get('/update/:id', EmployeeController.getUpdate);

module.exports = employeeRoute;
