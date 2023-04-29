const route = require('express').Router();

route.get('/', (req, res) => {
  res.send('Welcome to the my Employee app');
});

const employeeRoute = require('./employee');
const jobRoutes = require('./job');
const employerRoute = require('./employer');

route.use('/employee', employeeRoute);
route.use('/job', jobRoutes);
route.use('/employer', employerRoute);

// route.get('/employee', (req, res) => {
//   res.send('Employee page');
// });

//

//

module.exports = route;
