const express = require('express');
const router = express.Router();
const proyectoController = require("../controllers/proyecto");

//Rutas de mi controllers
router.post('/agregarProyecto', proyectoController.postAgregarProyecto);
router.get('/consultarProyecto', proyectoController.getconsultarProyectos);

module.exports = router