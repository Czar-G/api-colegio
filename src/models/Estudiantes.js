import { Schema, model } from "mongoose";

const estudianteSchema = new Schema({

    names: String,
    lastnames: String,
    imgUrl: String,
    dni: {
        type: String,
        unique: true
    },
    edad: Number,
    fechadenacimiento: Date,
    direccion: String,
    numerotelefono: Number,
    email: {
        type: String,
        unique: true
    },
    active: {
        type: Number, 
        default:1
    }

},{
    timestamps: true,
    versionKey: false
})

export default model('Estudiante', estudianteSchema);