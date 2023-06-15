/* eslint-disable import/no-extraneous-dependencies */
const argon2 = require("argon2");
const jwt = require("jsonwebtoken");

const hashingOptions = {
  type: argon2.argon2id,
  memoryCost: 2 ** 16,
  timeCost: 5,
  parallelism: 1, // Correction de la faute de frappe dans le nom de l'option
};

const hashPassword = async (password) => {
  try {
    const hashedPassword = await argon2.hash(password, hashingOptions);
    return hashedPassword;
  } catch (err) {
    console.error(err);
    return false;
  }
};

const verifyPassword = async (req, res) => {
  try {
    const isVerified = await argon2.verify(
      req.user.password,
      req.body.password
    );
    if (isVerified) {
      const payload = {
        sub: {
          id: req.user.id,
        },
      };
      const token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: "2h",
      });
      console.info(token);
      delete req.user.password;
      res.send({ token, user: req.user });
    } else {
      res.sendStatus(401);
    }
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};

const verifyToken = (req, res, next) => {
  try {
    const authorizationHeader = req.get("Authorization");
    if (!authorizationHeader) {
      throw new Error("Authorization header is missing");
    }
    const [type, token] = authorizationHeader.split(" ");
    if (type !== "Bearer") {
      throw new Error("Authorization header does not have the bearer type");
    }
    req.payload = jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};

module.exports = {
  hashPassword,
  verifyPassword,
  verifyToken,
};
