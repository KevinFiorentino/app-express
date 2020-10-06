const express = require('express');
const router = express.Router();
const usuarioController = require("../controller/usuarioController");


router.get('/', usuarioController.get);
router.post('/agregar', usuarioController.post);
router.delete('/eliminar', usuarioController.del);


module.exports = router;
