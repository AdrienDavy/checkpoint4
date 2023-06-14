/* eslint-disable camelcase */
const AbstractManager = require("./AbstractManager");

class ScenarioManager extends AbstractManager {
  constructor() {
    super({ table: "scenario" });
  }

  findByGenre(id, nameGenre) {
    return this.database.query(
      `SELECT nameGenre FROM genre join ${this.table} on genre.id=${this.table}.genre`,
      [id, nameGenre]
    );
  }

  insert({ title, genre, synopsis, scenario, id_user_scenario }) {
    return this.database.query(
      `insert into ${this.table} (title,genre,
      synopsis,
      scenario,
      id_user_scenario) values (?,?,?,?,?)`,
      [title, genre, synopsis, scenario, id_user_scenario]
    );
  }
}

module.exports = ScenarioManager;
