export class Cookie {
  constructor(id, name, price, ingredients, type) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.ingredients = ingredients;
    this.type = type || [];
  }
}

export class Chocolate extends Cookie {
  constructor(id, name, price, ingredients, type, isSweet) {
    super(id, name, price, ingredients, type, isSweet);
    this.isSweet = false;
  }
}
export class Sweet extends Cookie {
  constructor(id, name, price, ingredients, type) {
    super(id, name, price, ingredients, type);
    this.isSweet = false;
  }
}
export class Strawberry extends Cookie {
  constructor(id, name, price, ingredients, type) {
    super(id, name, price, ingredients, type);
    this.isSweet = false;
  }
}

export let chocolate = new Chocolate(1, 'Black Forest', 15000, 'sugar', 'chocolate');
export let sweet = new Sweet(2, 'Lapis Legit', 15000, 'carbo', 'sweet');
export let strawberry = new Strawberry(3, 'Strawberry cheesecake', 100000, 'protein', 'fruit');
