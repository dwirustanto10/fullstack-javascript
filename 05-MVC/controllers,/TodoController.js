const View = require('../views/view');

class TodoController {
  static show() {
    console.log('Controller show');
  }
  static create(params) {
    console.log('Controller create');
  }
  static update(params) {
    console.log('Controller update');
  }
  static delete(params) {
    console.log('Controller delete');
  }
  static message(msg) {
    View.message(msg);
  }
}

modules.exports = TodoController;
