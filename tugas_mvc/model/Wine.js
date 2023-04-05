const fs = require('fs');

class Wine {
  constructor(id, name, year, type, createAt) {
    this.id = id;
    this.name = name;
    this.year = year;
    this.type = type;
    this.createAt = createAt;
  }

  static getWines() {
    let wines = fs.readFileSync('./wines.json', 'utf8');
    wines = JSON.parse(wines);
    wines = wines.map((wine) => {
      const { id, name, year, type, createAt } = wine;
      return new Wine(id, name, year, type, createAt);
    });

    return wines;
  }

  static wines() {
    let wines = this.getWines();
    return wines;
  }

  static help() {
    // proses logic
    return 'Sudah di balikkan ke controller';
  }
}

module.exports = Wine;
