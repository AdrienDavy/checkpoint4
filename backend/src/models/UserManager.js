const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  insert({ pseudo, email, login, password, city, picture }) {
    return this.database.query(
      `insert into ${this.table} (pseudo, email, login, password, city, picture) values (?,?,?,?,?,?)`,
      [pseudo, email, login, password, city, picture]
    );
  }

  getUserByEmail(email) {
    return this.database.query(`select * from ${this.table} where email = ?`, [
      email,
    ]);
  }
}

module.exports = UserManager;
