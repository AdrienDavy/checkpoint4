const router = require("express").Router();
const user = require("./user.route");
const scenario = require("./scenario.route");
const video = require("./video.route");
// ici vos routes
router.use("/user", user);
router.use("/scenario", scenario);
router.use("/video", video);
module.exports = router;
