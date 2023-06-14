const router = require("express").Router();
const user = require("./user.route");
// ici vos routes
router.use("/user", user);
module.exports = router;
