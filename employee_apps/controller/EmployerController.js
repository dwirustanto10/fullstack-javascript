class EmployerController {
  static getEmployer(req, res) {
    res.send('Employer page');
  }

  static create(req, res) {
    res.send('Employer create page');
  }

  static getDelete(req, res) {
    const id = Number(req.params.id);
    if (typeof id === 'number' && isNaN(id) === false) {
      res.send(`Employer delete in id ${id} page`);
    } else {
      res.send('id must be number');
    }
  }

  static getUpdate(req, res) {
    const id = Number(req.params.id);
    if (typeof id === 'number' && isNaN(id) === false) {
      res.send(`Employer update in id ${id} page`);
    } else {
      res.send('id must be number');
    }
  }
}

module.exports = EmployerController;
