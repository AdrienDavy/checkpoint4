const router = require("express").Router();
const userController = require("../controllers/userController");
const { verifyToken } = require("../utils/auth");

router.get("/", userController.browse);
router.get("/:id", userController.read);
router.post("/", verifyToken, userController.add);

module.exports = router;
