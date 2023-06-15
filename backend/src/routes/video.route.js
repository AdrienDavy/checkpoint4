/* eslint-disable import/no-extraneous-dependencies */
const router = require("express").Router();
const multer = require("multer");

const path = require("node:path");
const videoController = require("../controllers/videoController");

const uploadFolder = path.join(__dirname, "../../public/assets/videos");
const upload = multer({ dest: uploadFolder });

router.get("/genre", videoController.browseGenre);
router.get("/user/:id", videoController.readUser);
router.get("/", videoController.browse);
router.get("/:id", videoController.read);

router.post("/", upload.single("video"), videoController.add);

module.exports = router;
