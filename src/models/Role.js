import { Schema, model } from "mongoose";

const roleSchema = new Schema({
    name: String,
    active: {
        type:Number,
        default: 1
    }
},{
    timestamps: true,
    versionKey: false
})

export default model("Role", roleSchema)