const router = require("express").Router();
const scenarioController = require("../controllers/scenarioController");

router.get("/", scenarioController.browse);
router.get("/:id", scenarioController.read);
router.post("/", scenarioController.add);

module.exports = router;
