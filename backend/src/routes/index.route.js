const router = require("express").Router();
const user = require("./user.route");
const scenario = require("./scenario.route");
const video = require("./video.route");
const genre = require("./genre.route");
// ici vos routes
router.use("/user", user);
router.use("/scenario", scenario);
router.use("/video", video);
router.use("/genre", genre);
module.exports = router;
