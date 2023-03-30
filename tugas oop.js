class Cookie {
  constructor(id, name, price, ingredients, type) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.ingredients = ingredients;
    this.type = type || [];
  }
}

class Chocolate extends Cookie {
  constructor(id, name, price, ingredients, type, isSweet) {
    super(id, name, price, ingredients, type, isSweet);
    this.isSweet = false;
  }
}
class Sweet extends Cookie {
  constructor(id, name, price, ingredients, type) {
    super(id, name, price, ingredients, type);
    this.isSweet = false;
  }
}
class Strawberry extends Cookie {
  constructor(id, name, price, ingredients, type) {
    super(id, name, price, ingredients, type);
    this.isSweet = false;
  }
}

let chocolate = new Chocolate(1, 'Black Forest', 15000, 'sugar', 'chocolate');
let sweet = new Sweet(2, 'Lapis Legit', 15000, 'Carbo', 'sweet');
let strawberry = new Strawberry(3, 'Strawberry cheesecake', 100000, 'protein', 'fruit');

console.log(chocolate);
console.log(sweet);
console.log(strawberry);

class Kitchen {
  constructor(cookies) {
    this.container = this.container || [];
  }
  bake(name, price, ingredients, type) {
    let id = 1;
    if (this.container.length !== 0) {
      id = this.container[this.container.length - 1].id + 1;
    }
    switch (type) {
      case 'chocolate':
        this.container.push(new Chocolate(id, name, price, ingredients, type, false, []));
        break;
      case 'sweet':
        this.container.push(new Sweet(id, name, type, price, false, []));
        break;
      case 'strawberry':
        this.container.push(new Strawberry(id, name, type, price, false, []));
        break;

      default:
        break;
    }
  }

  // eat() {
  //   console.log('Delete cookies in the container:');
  // }
  // addSugar() {
  //   console.log('Change the taste of cookies');
  // }

  // showCookies() {
  //   console.log('Cookies Available: ');
  //   this.container.forEach((cookies, index) => {
  //     console.log(`${index + 1}. ${cookies.name}, ${cookies.type}, RP. ${cookies.price}`);
  //   });
  // }
}

const kitchen = new Kitchen();
kitchen.bake('wafer', 7000, 'carbo', 'chocolate');
console.log(Kitchen.container);
