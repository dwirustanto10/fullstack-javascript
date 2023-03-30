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
let sweet = new Sweet(2, 'Lapis Legit', 15000, 'carbo', 'sweet');
let strawberry = new Strawberry(3, 'Strawberry cheesecake', 100000, 'protein', 'fruit');

class Kitchen {
  constructor(container) {
    this.container = container || [];
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
        this.container.push(new Sweet(id, name, price, ingredients, type, false, []));
        break;
      case 'fruit':
        this.container.push(new Strawberry(id, name, price, ingredients, type, false, []));
        break;

      default:
        break;
    }
  }

  eat(id) {
    this.container = this.container.filter((cookies) => cookies.id !== id);
  }
  addSugar(id, isSweet) {
    this.container = this.container.map((cookies) => {
      if (cookies.id === id) {
        cookies.isSweet = isSweet;
      }
      return cookies;
    });
  }

  showCookies() {
    console.log('Cookies Available: ');
    this.container.forEach((cookies, index) => {
      console.log(`${index + 1}. ${cookies.name}, RP. ${cookies.price}, ${cookies.type}, ${cookies.isSweet}`);
    });
  }
}

const kitchen = new Kitchen();
kitchen.bake('wafer', 7000, 'carbo', 'chocolate');
kitchen.bake('Jus Apel', 15000, 'fruit', 'fruit');
kitchen.bake('lapis', 27000, 'protein', 'sweet');
// kitchen.eat(2);
kitchen.addSugar(2, true);
kitchen.showCookies();

// console.log(kitchen.container);
