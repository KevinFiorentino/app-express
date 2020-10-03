var express = require('express');
var router = express.Router();

var poisController = require("../controller/poisController");
const { pois } = require('../model/Pois');

router.get('/', poisController.pois_list);

router.post('/agregar', poisController.pois_create);

router.delete('/eliminar', poisController.pois_delete);

module.exports = router;
