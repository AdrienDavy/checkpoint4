/* eslint-disable import/no-extraneous-dependencies */
const router = require("express").Router();
const multer = require("multer");

const path = require("node:path");
const scenarioController = require("../controllers/scenarioController");

const uploadFolder = path.join(__dirname, "../../public/assets/scenarios");
const upload = multer({ dest: uploadFolder });

router.get("/", scenarioController.browse);
router.get("/genre", scenarioController.browseGenre);
router.get("/user/:id", scenarioController.readUser);
router.get("/:id", scenarioController.read);
router.post("/", upload.single("scenario"), scenarioController.add);

module.exports = router;
