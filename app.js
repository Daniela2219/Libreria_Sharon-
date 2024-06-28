const mongoose = require ('mongoose')
const url_bd = 'mongodb://localhost:27017/Libreria_Sharon'

//Conexion con db
mongoose.connect(url_bd)

//Comprobacion
.then(() => {
    console.log("todo muy bien")
})
.catch((err)=>{
    console.log("No tiene funcion")
}) 

//Esquemas db
const Libreria_Sharon = new mongoose.Schema({
    nombre:{
        type:String
    },
    autor:{
        type:String
    },
    genero:{
        type:String
    },
    edicion:{
        type:Number
    },
    telefono:{
        type:String
    },
    paginas:{
        type:Number
    },
    precio:{
        type:Number
    }

})

//modelo db
const libreria_modelo = new mongoose.model('empleados', Libreria_Sharon)

//Crear tabla
libreria_modelo.create({
    nombre:"Crepusculo",
    autor:"Thomas",
    genero:"Ficcion",
    edicion:16,
    telefono:"449-899-1411",
    paginas:200,
    precio:180
})
