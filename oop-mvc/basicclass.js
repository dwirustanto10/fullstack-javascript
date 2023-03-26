// oop

class Vehicle {
  constructor(name, type, price, engine, tags) {
    this.name = name || ''; /*class by default*/
    this.type = type || ''; /*class by default*/
    this.price = price || 0; /*class by default*/
    // jika di tambah attribute nya
    this.engine = engine;
    this.tags = tags || [];
  }

  startEngine() {
    console.log('Start Engine');
    this.engine = true;
  }
  stopEngine() {
    console.log('Stop Engine');
    this.engine = false;
  }
  showtags() {
    console.log('Show tags');
    this.tags.forEach((tag, index) => console.log(`${index + 1}. ${tag}`));
  }

  addTag(tagName) {
    this.tags.push(tagName);
    console.log(`tag "${tagName}" has been added`);
  }

  removeTag(tagName) {
    this.tags = this.tags.filter((tag) => tag !== tagName);
  }
}

// instalation => proses pembuatan class menjadi object class
// let ves = new Vehicle('vitara', 'suv', 5500, false, ['offroad']);
// or
// let civic = new Vehicle('honda', 'sedan', 5500, true, ['city car']);
// ves.addTag('escudo');
// ves.removeTag('escudo');
// // civic.addTag('supra');
// // civic.showtags();
// ves.showtags();
// let vehicle = new Vehicle();
// console.log(vehicle);
// console.log(civic);
// ves.startEngine();
// console.log(ves);
// civic.stopEngine();
// console.log(civic);
// vehicle.startEngine();
// vehicle.stopEngine();

class Showroom {
  constructor(rooms) {
    this.rooms = rooms || [];
  }
  showVehicles() {
    console.log('Vehicles list: ');
    this.rooms.forEach((room, index) => {
      console.log(`${index + 1}. ${room.name}, ${room.type}, RP. ${room.price}`);
    });
  }

  addVehicle(name, type, price) {
    // utnuk emnambahkan
    this.rooms.push(new Vehicle(name, type, price, false, []));
  }
  deleteVehicle(name) {
    this.rooms = this.rooms.filter((room) => room.name !== name);
  }
}

let showroom = new Showroom();
showroom.addVehicle('grand vitara', 'suv', 7000);
showroom.addVehicle('defender', 'jeep', 9000);
showroom.deleteVehicle('defender');
showroom.showVehicles();
// console.log(showroom.rooms);
