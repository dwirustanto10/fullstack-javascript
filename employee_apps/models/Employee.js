const { rejects } = require('assert');
const fs = require('fs');
const { resolve } = require('path');

class Employee {
  constructor(id, name, job, age, city) {
    this.id = id;
    this.name = name;
    this.job = job;
    this.age = age;
    this.city = city;
  }

  static getAllEmployee() {
    return new Promise((resolve, reject) => {
      fs.readFileSync('./employee.js', 'utf8', (err, data) => {
        if (err) {
          reject(err);
        } else {
          let employees = JSON.parse(data);
          console.log(employees);
        }
      });
    });
  }
}

module.exports = Employee;
