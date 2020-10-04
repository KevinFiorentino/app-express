const express = require('express');
const router = express.Router();
const poisController = require("../controller/poisController");


router.get('/', poisController.pois_list);
router.post('/agregar', poisController.pois_create);
router.delete('/eliminar', poisController.pois_delete);


module.exports = router;
