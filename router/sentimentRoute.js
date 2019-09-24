let router = require('express').Router();
const controller = require('../controller/sentimentController')
router.route("/").all(controller.sentimentController);
module.exports = router;