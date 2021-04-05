const router = require("express").Router();
const { ProyectosController } = require("../controllers");
router.get("/proyectos/:id", ProyectosController.getProyect);
router.get("/proyectos", ProyectosController.getProyects);
router.post("/proyectos", ProyectosController.addProyect);
router.put("/proyectos/:id", ProyectosController.updateProyect);
router.delete("/proyectos/:id", ProyectosController.deleteProyect);

module.exports = router;
