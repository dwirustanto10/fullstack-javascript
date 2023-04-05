const Wine = require('../model/Wine');
const WineView = require('../view/WineView');

class WineController {
  static help() {
    // console.log('ini dalam controller');
    let help = Wine.help();
    WineView.help(help);
  }

  static wines() {
    const wines = Wine.wines();
    WineView.wines(wines);
  }
  s;

  static add() {}

  static sell() {}

  static rename() {}

  static findById() {}
}

module.exports = WineController;
