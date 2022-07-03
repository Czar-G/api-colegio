import { Schema, model } from "mongoose";

const cursoSchema = new Schema({

    name: String,
    imgUrl: String,
    active: {
        type: Number, 
        default:1
    }

},{
    timestamps: true,
    versionKey: false
})

export default model('Curso', cursoSchema);