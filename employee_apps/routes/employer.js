const employerRoute = require('express').Router();
const EmployerController = require('../controller/EmployerController');

employerRoute.get('/', EmployerController.getEmployer);

employerRoute.get('/create', EmployerController.create);

employerRoute.get('/delete/:id', EmployerController.getDelete);

employerRoute.get('/update/:id', EmployerController.getUpdate);

module.exports = employerRoute;
