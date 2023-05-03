const lectureRoute = require('express').Router();
const LecturerController = require('../controllers/LectureController');

lectureRoute.get('/', LecturerController.getLecturers);
lectureRoute.post('/create', LecturerController.create);
lectureRoute.get('/history/:id', LecturerController.getHistory);

module.exports = lectureRoute;
