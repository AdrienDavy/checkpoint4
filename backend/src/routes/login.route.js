const router = require("express").Router();
const userController = require("../controllers/userController");
const { verifyPassword } = require("../utils/auth");

router.post("/", userController.getUserByEmailToNext, verifyPassword);

module.exports = router;
