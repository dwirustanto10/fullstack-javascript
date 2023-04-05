const route = require('express').Router();

route.get('/', (req, res) => {
  res.send('Home Page');
});

const userRoute = require('./user');
route.use('/users', userRoute);

module.exports = route;
