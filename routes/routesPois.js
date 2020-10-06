const express = require('express');
const router = express.Router();
const poisController = require("../controller/poisController");


router.get('/', poisController.get);
router.post('/agregar', poisController.post);
router.delete('/eliminar', poisController.del);


module.exports = router;
