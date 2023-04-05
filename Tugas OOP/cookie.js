class Cookie {
  constructor(id, name, price, ingredients, type) {
    this.id = id || 0;
    this.name = name || '';
    this.price = price || 0;
    this.ingredients = ingredients || [];
    this.type = type || '';
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

module.exports = {
  Chocolate,
  Sweet,
  Strawberry,
};
