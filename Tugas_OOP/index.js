const Kitchen = require('./kitchen');

let kitchen = new Kitchen();

kitchen.bake('wafer', 7000, ['chocolate', 'butter', 'egg'], 'chocolate');
kitchen.bake('wafle', 15000, ['egg', 'butter'], 'sweet');
kitchen.bake('apem', 27000, ['santan', 'egg'], 'sweet');
kitchen.bake('sagon', 7000, ['tepung', 'sugar'], 'strawberry');
kitchen.bake('lempok', 37000, ['tepung', 'durian'], 'strawberry');

// kitchen.eat(2);
// kitchen.eat(3);

kitchen.addSugar(1);
kitchen.addSugar(5);

kitchen.addIngredients(5, ['santan', 'sugar']);
// kitchen.showIngredients(2);
// console.log(kitchen.container);
kitchen.categoriesCookieByIngredient('egg');
// kitchen.showCookies();
kitchen.sortCookies('asc');
