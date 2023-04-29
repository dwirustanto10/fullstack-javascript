const itemRoute = require('express').Router();
const ItemController = require('../controllers/UserController');

itemRoute.get('/', ItemController.getItems);
itemRoute.get('/info/:id', ItemController.getItemsById);
itemRoute.post('/create', ItemController.create);
itemRoute.get('/delete/:id', ItemController.delete);
itemRoute.post('/update/:id', ItemController.update);

module.exports = userRoute;
