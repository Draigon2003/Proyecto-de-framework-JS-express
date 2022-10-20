const mongoose = require('mongoose')

//Modelo de bootcamps
const BootcampsSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [
            true,
            "ingrese nombre o no sabe leer?"
        ],
        unique: true,
        maxlenght: [
            30,
            "No se amiten bootcamps > 30"
        ]
    },
    description: {
        type: String,
        required: [
            true,
            'ingrese descripcion animal'
        ],
        maxlenght: [
            500,
            "no se admiten descripciones > a 500"
        ]
    },
    phone:{
        type: String,
        maxlenght:[
            20,
            "telefonos no mayores a 20"
        ]
    },
    email:{
        type: String,
        match:[
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            'porfavor, ingrese email'
        ]
    },
    averageCost: Number,
    averageRating: {
        type: Number,
        min:[1,'Calificaion minima : 1'],
        max:[10, 'Calificaion maxima de 10']
    }
})

module.exports = mongoose.model('bootcamp', BootcampsSchema)