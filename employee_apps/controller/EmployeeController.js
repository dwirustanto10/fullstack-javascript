const Employee = require('../models/Employee');

class EmployeeController {
  static getEmployee(req, res) {
    // res.send('Employee page');
    Employee.getAllEmployee()
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  static create(req, res) {
    res.send('Employee create page');
  }

  static getDelete(req, res) {
    const id = Number(req.params.id);
    if (typeof id === 'number' && isNaN(id) === false) {
      res.send(`Employee delete in id ${id} page`);
    } else {
      res.send('id must be number');
    }
  }

  static getUpdate(req, res) {
    const id = Number(req.params.id);
    if (typeof id === 'number' && isNaN(id) === false) {
      res.send(`Employee update in id ${id} page`);
    } else {
      res.send('id must be number');
    }
  }
}

module.exports = EmployeeController;
