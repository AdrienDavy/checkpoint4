const router = require("express").Router();
const user = require("./user.route");
const scenario = require("./scenario.route");
// ici vos routes
router.use("/user", user);
router.use("/scenario", scenario);
module.exports = router;
