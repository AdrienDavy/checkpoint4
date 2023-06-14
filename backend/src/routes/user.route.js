/* eslint-disable import/no-extraneous-dependencies */
const router = require("express").Router();
const multer = require("multer");
const path = require("path");
const userController = require("../controllers/userController");
const { verifyToken } = require("../utils/auth");

const uploadFolder = path.join(__dirname, "../../public/assets/images");
const upload = multer({ dest: uploadFolder });

router.get("/", userController.browse, verifyToken);
router.get("/:id", userController.read);
router.post("/", upload.single("picture"), userController.add, verifyToken);

module.exports = router;
