class WineView {
  static help(msg) {
    console.log(msg);
  }

  static wines(wines) {
    console.log(`Welcome to wine management!!, in our list: `);
    wines.forEach((wine) => {
      const { id, name } = wine;
      console.log(`${id}. ${name}`);
    });
  }
}

module.exports = WineView;
