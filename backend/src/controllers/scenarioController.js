/* eslint-disable camelcase */
/* eslint-disable consistent-return */
const fs = require("node:fs");
const path = require("node:path");
const models = require("../models");

const browse = (req, res) => {
  models.scenario
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
  models.scenario
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
  models.scenario
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
  models.scenario
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
  const { title, genre, synopsis, id_user_scenario } = req.body;
  const { file } = req;
  if (!file) {
    return res.sendStatus(500);
  }
  // TODO validations (length, format...)
  const baseFolder = path.join(__dirname, "../../public/assets/scenarios");
  const originalName = path.join(baseFolder, file.originalname);
  const filename = path.join(baseFolder, file.filename);
  fs.rename(filename, originalName, (err) => {
    if (err) throw err;
  });
  const scenariofile = `scenarios/${file.originalname}`;

  models.scenario
    .insert({ title, genre, synopsis, scenariofile, id_user_scenario })
    .then((result) => {
      const newScenario = {
        title,
        genre,
        synopsis,
        scenariofile,
        id_user_scenario,
        id: result.insertId,
      };
      return res.status(201).json(newScenario);
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
