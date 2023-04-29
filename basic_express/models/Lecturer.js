// const { rejects } = require('assert');
const fs = require('fs');
// const { resolve } = require('path');

class Lecturer {
  constructor(id, name, subject, age, city) {
    this.id = id;
    this.name = name;
    this.subject = subject;
    this.age = age;
    this.city = city;
  }

  static getAllLecturers() {
    return new Promise((resolve, rejects) => {
      fs.readFile('./lectures.json', 'utf8', (err, data) => {
        if (err) {
          rejects(err);
        } else {
          let lecturers = JSON.parse(data);
          lecturers = lecturers.map((lecturer) => {
            const { id, name, subject, age, city } = lecturer;
            return new Lecturer(id, name, subject, age, city);
          });
          resolve(lecturers);
        }
      });
    });
  }

  static getHistory(id) {
    return new Promise((resolve, reject) => {
      this.getAllLecturers()
        .then((result) => {
          let lecturers = result;
          let findOneLecturer = lecturers.filter((lecturer) => lecturer.id === id);
          // Beljm sudah()
          if (findOneLecturer.length !== 0) {
            resolve(findOneLecturer[0]);
          } else {
            throw {
              message: `Lecturer with id ${id} is not found!`,
            };
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
}

module.exports = Lecturer;
