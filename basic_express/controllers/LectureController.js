const Lecturer = require('../models/Lecturer');

class LecturerController {
  static getLecturers(req, res) {
    // res.send('Lecturer page');
    Lecturer.getAllLecturers()
      .then((result) => {
        // console.log(result)
        res.send(result);
      })
      .catch((err) => {
        // console.log(err)
        res.send(err);
      });
  }

  static create(req, res) {
    console.log(req.body);
    res.send('Create Lecturer page');
    Lecturer.create(req.body)
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        res.send(er);
      });
  }
  static getHistory(req, res) {
    const id = Number(req.params.id);

    Lecturer.getHistory(id)
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        res.send(err);
      });

    // if (typeof id === 'number' && isNaN(id) === false) {
    //   res.send(`This is history Lecturer page ${id}`);
    // } else {
    //   res.send(`ID must be number!`);
    // }
  }
}

module.exports = LecturerController;
