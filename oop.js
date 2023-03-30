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

let sedan = new Sedan(1, 'Honda City', 'sedan', 5000, 'Honda');
let truck = new Truck(2, 'Colt Pickup', 'truck', 5000, 'colt');
let sport = new Sport(3, 'Pajero', 'sport', 10000, 'Mitsubishi');

// console.log(sedan)
// console.log(truck)
// console.log(sport)

class Showroom {
  constructor(rooms) {
    this.rooms = rooms || [];
  }

  showVehicles() {
    // untuk menampilkan vehicles
    console.log('Vehicle List: ');
    this.rooms.forEach((room, index) => {
      console.log(`${index + 1}. ${room.name}, RP. ${room.price}`);
    });
  }
  addVehicle(name, type, price) {
    // untuk menambahkan
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

showroom.addVehicle('Toyota Raize', 'sport', 5000);
showroom.addVehicle('Colt', 'truck', 5000);
showroom.addVehicle('Honda Brio', 'sedan', 3500);
showroom.showVehicles();
console.log(showroom.rooms);
