const AbstractManager = require("./AbstractManager");

class GenreManager extends AbstractManager {
  constructor() {
    super({ table: "genre" });
  }
}

module.exports = GenreManager;
