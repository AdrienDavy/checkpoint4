/* eslint-disable camelcase */
/* eslint-disable consistent-return */
const path = require("path");
const fs = require("fs");
const models = require("../models");

const browse = (req, res) => {
  models.video
    .findAll()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const browseGenre = (req, res) => {
  models.video
    .findByGenre()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const read = (req, res) => {
  models.video
    .find(req.params.id)
    .then(([rows]) => {
      if (rows[0] == null) {
        res.sendStatus(404);
      } else {
        res.send(rows[0]);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const readUser = (req, res) => {
  models.video
    .findByUser(req.params.id)
    .then(([rows]) => {
      if (rows[0] == null) {
        res.sendStatus(404);
      } else {
        res.send(rows[0]);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const add = (req, res) => {
  const { title, genre, synopsis, id_user_video } = req.body;
  const { file } = req;
  if (!file) {
    return res.sendStatus(500);
  }
  // TODO validations (length, format...)
  const baseFolder = path.join(__dirname, "../../public/assets/videos");
  const originalName = path.join(baseFolder, file.originalname);
  const filename = path.join(baseFolder, file.filename);
  fs.rename(filename, originalName, (err) => {
    if (err) throw err;
  });
  const videofile = `videos/${file.originalname}`;

  models.video
    .insert({ title, genre, synopsis, videofile, id_user_video })
    .then((result) => {
      const newVideo = {
        title,
        genre,
        synopsis,
        videofile,
        id_user_video,
        id: result.insertId,
      };
      return res.status(201).json(newVideo);
    })
    .catch((err) => {
      console.error(err);
      return res.sendStatus(500);
    });
};

module.exports = {
  browse,
  browseGenre,
  read,
  readUser,
  add,
};
