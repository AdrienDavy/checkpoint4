const router = require("express").Router();
const userController = require("../controllers/userController");
const { verifyToken } = require("../utils/auth");

router.get("/", userController.browse, verifyToken);
router.get("/:id", userController.read);
router.post("/", userController.add);

module.exports = router;
