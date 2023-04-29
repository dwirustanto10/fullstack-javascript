const lectureRoute = require('express').Router();
const LecturerController = require('../controllers/LectureController');

lectureRoute.get('/', LecturerController.getLecturers);
lectureRoute.get('/create', LecturerController.create);
lectureRoute.get('/history/:id', LecturerController.getHistory);

module.exports = lectureRoute;
