var express = require('express');
var router = express.Router();

var poisController = require("../controller/poisController");
const { pois } = require('../model/Pois');

router.get('/', poisController.pois_list);

/*
router.post('/agregar', function(req, res, next) {
  res.send('otra ruta');
});
*/
router.post('/agregar', poisController.pois_create);

module.exports = router;
