const { ProyectoModel } = require("../models/index");
const { isValidObjectId } = require("mongoose");
class ProyectosController {
  constructor() {}
  async getProyects(req, res) {
    const data = await ProyectoModel.find();
    console.log(data);
    return res.send(data);
  }
  async getProyect(req, res) {
    const data = await ProyectoModel.findById(req.params.id);
    return res.send(data);
  }
  async deleteProyect(req, res) {
    await ProyectoModel.deleteOne({ _id: req.params.id });
    console.log(isValidObjectId(req.params.id));
    res.send("Objeto Eliminado");
  }
  async updateProyect(req, res) {
    const { changes } = req.body;
    const { id } = req.params;
    let itemToChange = { [req.body.itemToChange]: changes };

    await ProyectoModel.findByIdAndUpdate(id, itemToChange);
    console.log(id, itemToChange);
    res.send("Veamos Que tal");
  }
  async addProyect(req, res) {
    const { titulo, tecnologias, descripcion, link } = req.body;
    if (titulo && tecnologias && descripcion && link) {
      const newProyect = new ProyectoModel({
        titulo,
        tecnologias,
        descripcion,
        link,
      });
      await newProyect.save();
      res.send(
        "Tarea completa objeto " +
          newProyect +
          " ha sido integrado en la base de datos"
      );
    } else {
      res.send("No estan todos los campos completados");
    }
  }
}

module.exports = new ProyectosController();
