const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  insert({ pseudo, email, password, city }) {
    return this.database.query(
      `insert into ${this.table} (pseudo, email,  password, city) values (?,?,?,?)`,
      [pseudo, email, password, city]
    );
  }

  getUserByEmail(email) {
    return this.database.query(`select * from ${this.table} where email = ?`, [
      email,
    ]);
  }
}

module.exports = UserManager;
