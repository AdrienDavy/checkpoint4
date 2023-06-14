/* eslint-disable import/no-extraneous-dependencies */
const Joi = require("joi");
const models = require("../models");
const { hashPassword } = require("../utils/auth");

const validate = (data, forCreation = true) => {
  const presence = forCreation ? "required" : "optional";
  return Joi.object({
    pseudo: Joi.string()
      .pattern(/^[A-Za-zÀ-ÿ]+$/)
      .min(1)
      .max(30)
      .presence(presence),

    email: Joi.string().email({ minDomainSegments: 2 }).presence(presence),

    login: Joi.string().presence(presence),

    password: Joi.string()
      .pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/)
      .presence(presence),

    city: Joi.string()
      .pattern(/^[A-Za-zÀ-ÿ]+$/)
      .min(1)
      .max(30)
      .presence(presence),

    picture: Joi.string()
      .pattern(/^[A-Za-zÀ-ÿ]+$/)
      .min(1)
      .max(30)
      .presence(presence),
  }).validate(data, { abortEarly: false }).error;
};

const browse = (req, res) => {
  models.user
    .findAll()
    .then(([user]) => {
      const filteredUsers = user.map((userdata) => {
        return {
          id: userdata.id,
          pseudo: userdata.pseudo,
          email: userdata.email,
          lastname: userdata.lastname,
          city: userdata.city,
          picture: userdata.picture,
        };
      });
      res.send(filteredUsers);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const read = (req, res) => {
  models.user
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

const add = async (req, res) => {
  const user = req.body;

  // TODO validations (length, format...)
  const errors = validate(user);
  if (errors) {
    res.sendStatus(422);
  } else {
    user.password = await hashPassword(user.password);
    models.user
      .insert(user)
      .then(([result]) => {
        res.location(`/user/${result.insertId}`).sendStatus(201);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  }
};

const getUserByEmailToNext = async (req, res, next) => {
  const { email } = req.body;
  if (!email) res.sendStatus(422);
  models.user
    .getUserByEmail(email)
    .then(([result]) => {
      if (result[0] != null) {
        [req.user] = result;
        next();
      } else res.sendStatus(401);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  browse,
  read,
  add,
  getUserByEmailToNext,
};
