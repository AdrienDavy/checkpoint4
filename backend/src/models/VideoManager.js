/* eslint-disable camelcase */
const AbstractManager = require("./AbstractManager");

class VideoManager extends AbstractManager {
  constructor() {
    super({ table: "video" });
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
