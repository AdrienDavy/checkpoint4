const router = require("express").Router();
const userController = require("../controllers/userController");

router.get("/", userController.browse);
router.get("/:id", userController.read);
router.post("/", userController.add);

module.exports = router;
