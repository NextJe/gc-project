import { Int32 } from "mongodb";
import mongoose from "mongoose";

const cursoSchema = new mongoose.Schema({
    id : { type: mongoose.Schema.Types.ObjectId },
    titulo : { type: String, required: true },
    tipo : { type: String, required: true },
    professor : { type: String, required: true },
    preco :  { type: Number, required: true},
}, { versionKey: false});

const curso = mongoose.model("cursos", cursoSchema);

export default curso;