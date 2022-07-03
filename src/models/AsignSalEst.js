import { Schema, model } from "mongoose";

const asigSalEstSchema = new Schema({

    estudianteId: [{
        ref: "Estudiantes",
        type: Schema.Types.ObjectId
    }],
    salonId: [{
        ref: "Salon",
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

export default model('AsignacionSalonEstudiante', asigSalEstSchema);