class Cookie {
  constructor(id, name, price, ingredients, type) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.ingredients = ingredients || [];
    this.type = type;
  }
}

class Chocolate extends Cookie {
  constructor(id, name, price, ingredients, type, isSweet) {
    super(id, name, price, ingredients, type, isSweet);
    this.isSweet = isSweet || false;
  }
}
class Sweet extends Cookie {
  constructor(id, name, price, ingredients, type, isSweet) {
    super(id, name, price, ingredients, type, isSweet);
    this.isSweet = isSweet || false;
  }
}
class Strawberry extends Cookie {
  constructor(id, name, price, ingredients, type, isSweet) {
    super(id, name, price, ingredients, type, isSweet);
    this.isSweet = isSweet || false;
  }
}

class Factory {
  constructor(container) {
    this.container = container || [];
  }
  bake(...cookies) {
    const [name, price, ingredients, type] = cookies;

    let id;
    if (this.container.length === 0) id = 1;
    else id = this.container[this.container.length - 1].id + 1;
    switch (type) {
      case 'chocolate':
        this.container.push(new Chocolate(id, name, price, ingredients, type, false));
        break;
      case 'sweet':
        this.container.push(new Sweet(id, name, price, ingredients, type, false));
        break;
      case 'strawberry':
        this.container.push(new Strawberry(id, name, price, ingredients, type, false));
        break;

      default:
        break;
    }
  }

  // showIngredients() {
  //   console.log(` " ${factory.name} " ingredients are:`);

  //   this.container.forEach((cookies, index) => {
  //     console.log(` ${index + 1}. ${cookies.ingredients} `);
  //   });
  // }

  eat(id) {
    this.container = this.container.filter((cookies) => cookies.id !== id);
  }
  addSugar(id) {
    this.container = this.container.map((cookies) => {
      if (cookies.id === id) {
        cookies.isSweet = true;
      }
      return cookies;
    });
  }

  showCookies() {
    console.log('Our Cookies Available: ');

    this.container.forEach((cookie) => {
      const { id, name, price, isSweet } = cookie;
      if (isSweet) {
        console.log(`${id}. [v] ${name}, Rp. ${price}`);
      } else {
        console.log(`${id}. [ ] ${name}, Rp. ${price}`);
      }
    });
  }
}

const factory = new Factory();
factory.bake('wafer', 7000, ['chocolate', 'butter'], 'chocolate');
factory.bake('wafle', 15000, ['egg', 'buuter'], 'sweet');
factory.bake('apem', 27000, ['santan'], 'sweet');
factory.bake('sagon', 7000, ['tepung', 'sugar'], 'strawberry');
factory.bake('lempok', 37000, ['tepung', 'durian'], 'strawberry');

factory.eat(2);
factory.eat(3);

factory.addSugar(1);
factory.addSugar(5);

factory.showCookies();
// factory.showIngredients(1);
// console.log(factory.container);
