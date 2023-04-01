const { Chocolate, Sweet, Strawberry } = require('./cookie');

class Kitchen {
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

  showIngredients(id) {
    let tempCookie = '';
    this.container.forEach((cookie) => {
      if (cookie.id === id) {
        tempCookie = cookie;
      }
    });
    if (tempCookie !== '') {
      console.log(`"${tempCookie.name}" ingredients are: `);
      tempCookie.ingredients.forEach((ing, index) => {
        console.log(`${index + 1}. ${ing}`);
      });
    } else console.log("There's no cookie.");
  }

  addIngredients(id, ingredients) {
    this.container = this.container.map((cookie) => {
      if (cookie.id === id) {
        cookie.ingredients.push(...ingredients);
      }
      return cookie;
    });
  }
}
module.exports = Kitchen;
