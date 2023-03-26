//inheritance

class Vehicle {
  constructor(id, name, type, price, brand) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.price = price;
    this.brand = brand;
  }
}

class Sedan extends Vehicle {
  constructor(id, name, type, price, brand) {
    super(id, name, type, price, brand);
  }
}
class Truck extends Vehicle {
  constructor(id, name, type, price, brand) {
    super(id, name, type, price, brand);
  }
}
class Sport extends Vehicle {
  constructor(id, name, type, price, brand) {
    super(id, name, type, price, brand);
  }
}

let sedan = new Sedan(1, 'grand vitara', 'suv', 10000, 'suzuki');
let truck = new Truck(2, 'fuso', 'truk', 15000, 'mitsubishi');
let sport = new Sport(3, 's class', 'monster', 100000, 'mercedes');

console.log(sedan);
console.log(truck);
console.log(sport);

class Showroom {
  constructor(room) {
    this.rooms = this.rooms || [];
  }
  showVehicles() {
    console.log('Vehicles list: ');
    this.rooms.forEach((room, index) => {
      console.log(`${index + 1}. ${room.name}, ${room.type}, RP. ${room.price}`);
    });
  }

  addVehicle(name, type, price) {
    // utnuk emnambahkan
    let id = 1;
    if (this.rooms.length !== 0) {
      id = this.rooms[this.rooms.length - 1].id + 1;
    }
    switch (type) {
      case 'sedan':
        this.rooms.push(new Sedan(id, name, type, price, false, []));
        break;
      case 'truck':
        this.rooms.push(new Truck(id, name, type, price, false, []));
        break;
      case 'sport':
        this.rooms.push(new Sport(id, name, type, price, false, []));
        break;

      default:
        break;
    }
  }

  updateVehicle(id, name) {
    this.rooms = this.rooms.map((room) => {
      if (room.id === id) {
        room.name = name;
      }
      return room;
    });
  }
  deleteVehicle(name) {
    this.rooms = this.rooms.filter((room) => room.name !== name);
  }
}

const showroom = new Showroom();

showroom.addVehicle('jimny', 'sport', 5000);
showroom.addVehicle('colt', 'truck', 15000);
showroom.addVehicle('porche', 'sedan', 25000);
showroom.showVehicles();
console.log(showroom.rooms);
