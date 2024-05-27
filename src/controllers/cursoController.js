import curso from "../models/Curso.js";

class CursoController {

    static async listarCursos (req, res) {
        try {
            const listarCursos = await curso.find({});
            res.status(200).json(listarCursos);
        }catch (erro){
            res.status(500).json({message : `${erro.message} - falha na requisição`});
        };
        
    };

    static async listarCursoPorId (req, res) {
        try {
            const id = req.params.id;
            const cursoEncontrado = await curso.findById(id);
            res.status(200).json(cursoEncontrado);
        }catch (erro){
            res.status(500).json({message : `${erro.message} - falha na requisição do livro`});
        };
        
    };

    static async carregarCurso (req, res) {
        try {
            const novoCurso = await curso.create(req.body);
            res.status(201).json({ message : "curso criado com sucesso", curso : novoCurso});
        } catch (erro) {
            res.status(500).json({ message : `${erro.message} - falha no cadastro do curso` });
        };
    };

    static async atualizarCurso (req, res) {
        try {
            const id = req.params.id;
            await curso.findByIdAndUpdate(id, req.body);
            res.status(200).json({message : "curso atualizado"});
        }catch (erro){
            res.status(500).json({message : `${erro.message} - falha na requisição do curso`});
        };    
    };

    static async removerCurso (req, res) {
        try {
            const id = req.params.id;
            await curso.findByIdAndDelete(id);
            res.status(200).json({message : "curso removido com sucesso"});
        }catch (erro){
            res.status(500).json({message : `${erro.message} - falha na remoção do curso`});
        };
    };

};

export default CursoController;