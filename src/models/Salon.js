import { Schema, model } from "mongoose";

const salonSchema = new Schema({

    grado: String,
    seccion: String,
    nivel: String,
    profesoresId:[{
        ref: "Profesores",
        type: Schema.Types.ObjectId
    }],
    estudiantesId:[{
        ref: "Estudiantes",
        type: Schema.Types.ObjectId
    }],
    cursosId:[{
        ref: "Cursos",
        type: Schema.Types.ObjectId
    }],
    active: {
        type: Number, 
        default:1
    }

},{
    timestamps: true,
    versionKey: false
})

export default model('Salon', salonSchema);