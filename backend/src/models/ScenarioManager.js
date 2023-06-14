/* eslint-disable camelcase */
const AbstractManager = require("./AbstractManager");

class ScenarioManager extends AbstractManager {
  constructor() {
    super({ table: "scenario" });
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
