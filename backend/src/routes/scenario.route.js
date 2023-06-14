const router = require("express").Router();
const scenarioController = require("../controllers/scenarioController");

router.get("/", scenarioController.browse);
router.get("/genre", scenarioController.browseGenre);
router.get("/user/:id", scenarioController.readUser);
router.get("/:id", scenarioController.read);
router.post("/", scenarioController.add);

module.exports = router;
