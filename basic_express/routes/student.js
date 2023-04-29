const studentRoute = require('express').Router();
const StudentController = require('../controllers/StudentController');

studentRoute.get('/', StudentController.getStudent);
studentRoute.get('/create', StudentController.createStudent);

studentRoute.get('/academy/:id', StudentController.getAcademy);

module.exports = studentRoute;
