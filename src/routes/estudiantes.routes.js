import { Router } from "express";
const router = Router();

import * as studentCtrl from '../controllers/estudiantes.controller'
import { authJwt } from "../middlewares";

router.post('/', [authJwt.verifyToken, authJwt.isModOrAdm], studentCtrl.createStudent)

router.get('/', studentCtrl.getStudent)

router.get('/:studentId', studentCtrl.getStudentById)

router.put('/:studentId', [authJwt.verifyToken, authJwt.isModOrAdm], studentCtrl.updateStudentById)

// //router.put('/', verifyToken, cursoCtrl.updateCurso)

router.delete('/:studentId', [authJwt.verifyToken, authJwt.isModOrAdm], studentCtrl.delStudentById)

// //router.delete('/', verifyToken, cursoCtrl.delCurso)






export default router;