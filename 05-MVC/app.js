// process.argv = package dari node.js untuk mengambil value dari terminal

const command = process.argv[2];
const params = process.argv.slice(3);
const TodoController = require('./controllers/TodoController');

switch (command) {
  case 'show':
    // command untuk show task
    TodoController.show();
    break;
  case 'create':
    // command untuk show task
    TodoController.create(params);
    break;
  case 'delete':
    // command untuk show task
    TodoController.delete(params);
    break;
  case 'update':
    // command untuk show task
    TodoController.update(params);
    break;

  default:
    // console.log('Please enter the correct command.');
    TodoController.message('Please enter the correct command.');
    break;
}

// c
