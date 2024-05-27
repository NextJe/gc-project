import express from "express";
import CursoController from "../controllers/cursoController.js";

const routes = express.Router();

routes.get("/cursos", CursoController.listarCursos);
routes.get("/cursos/:id", CursoController.listarCursoPorId);
routes.post("/cursos", CursoController.carregarCurso);
routes.put("/cursos/:id", CursoController.atualizarCurso);
routes.delete("/cursos/:id", CursoController.removerCurso);

export default routes;