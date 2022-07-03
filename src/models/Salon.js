import { Schema, model } from "mongoose";

const salonSchema = new Schema({

    grado: String,
    seccion: String,
    active: {
        type: Number, 
        default:1
    }

},{
    timestamps: true,
    versionKey: false
})

export default model('Salon', salonSchema);