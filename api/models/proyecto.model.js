const mongoose = require("mongoose")
const {Schema} = mongoose

const proyectoSchema = new Schema({
    titulo:String,
    descripcion:String,
    tecnologias:[String],
    link:String
})

module.exports = mongoose.model('Proyecto',proyectoSchema)