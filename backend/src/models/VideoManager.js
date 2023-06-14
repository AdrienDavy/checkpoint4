/* eslint-disable camelcase */
const AbstractManager = require("./AbstractManager");

class VideoManager extends AbstractManager {
  constructor() {
    super({ table: "video" });
  }

  findByGenre(id, nameGenre) {
    return this.database.query(
      `SELECT nameGenre FROM genre join ${this.table} on genre.id=${this.table}.genre`,
      [id, nameGenre]
    );
  }

  insert({ title, genre, synopsis, video, id_user_video }) {
    return this.database.query(
      `insert into ${this.table} (title,genre,
      synopsis,
      video,
      id_user_video) values (?,?,?,?,?)`,
      [title, genre, synopsis, video, id_user_video]
    );
  }
}

module.exports = VideoManager;
