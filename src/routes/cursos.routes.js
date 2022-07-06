import { Router } from "express";
const router = Router();

import * as cursoCtrl from '../controllers/cursos.controller'
import { authJwt } from "../middlewares";

router.post('/', [authJwt.verifyToken, authJwt.isModOrAdm], cursoCtrl.createCurso)

router.get('/', cursoCtrl.getCursos)

router.get('/:cursoId', cursoCtrl.getCursoById)

router.put('/:cursoId', [authJwt.verifyToken, authJwt.isModOrAdm], cursoCtrl.updateCursoById)

router.delete('/:cursoId', [authJwt.verifyToken, authJwt.isModOrAdm], cursoCtrl.delCursoById)

export default router;
