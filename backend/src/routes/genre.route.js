const router = require("express").Router();
const genreController = require("../controllers/genreController");

router.get("/", genreController.browse);
router.get("/:id", genreController.read);

module.exports = router;
