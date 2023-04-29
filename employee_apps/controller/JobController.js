class JobController {
  static getJob(req, res) {
    res.send('Job page');
  }

  static create(req, res) {
    res.send('Job create page');
  }

  static getDelete(req, res) {
    const id = Number(req.params.id);
    if (typeof id === 'number' && isNaN(id) === false) {
      res.send(`Job delete in id ${id} page`);
    } else {
      res.send('id must be number');
    }
  }

  static getUpdate(req, res) {
    const id = Number(req.params.id);
    if (typeof id === 'number' && isNaN(id) === false) {
      res.send(`Job update in id ${id} page`);
    } else {
      res.send('id must be number');
    }
  }
}

module.exports = JobController;
