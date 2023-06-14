const router = require("express").Router();
const videoController = require("../controllers/videoController");

router.get("/genre", videoController.browseGenre);
router.get("/video", videoController.browse);
router.get("/:id", videoController.read);

router.post("/", videoController.add);

module.exports = router;
