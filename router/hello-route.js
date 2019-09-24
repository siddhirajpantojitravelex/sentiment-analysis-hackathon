let router = require('express').Router();
const controller = require('../controller/hello-controller')
router.route("/").all(controller.helloController);
module.exports = router;