const jobRoute = require('express').Router();
const JobController = require('../controller/JobController');

jobRoute.get('/', JobController.getJob);

jobRoute.get('/create', JobController.create);

jobRoute.get('/delete/:id', JobController.getDelete);

jobRoute.get('/update/:id', JobController.getUpdate);

module.exports = jobRoute;
