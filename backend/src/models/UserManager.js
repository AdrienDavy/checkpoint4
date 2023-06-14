const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  insert({ pseudo, email, login, password, city, picture }) {
    return this.database.query(
      `insert into ${this.table} (pseudo,email,
      login,
      password,
      city,
      picture) values (?,?,?,?,?,?)`,
      [pseudo, email, login, password, city, picture]
    );
  }
}

module.exports = UserManager;
