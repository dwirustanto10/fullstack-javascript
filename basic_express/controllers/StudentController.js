class StudentController {
  static getStudent(req, res) {
    res.send('Student page');
  }

  static createStudent(req, res) {
    res.send('Create Lecturer page');
  }

  static getAcademy(req, res) {
    const id = Number(req.params.id);
    if (typeof id === 'number' && isNaN(id) === false) {
      res.send(`Student history academy page ${id}`);
    } else {
      res.send(`ID must be number!`);
    }
  }
}

module.exports = StudentController;
