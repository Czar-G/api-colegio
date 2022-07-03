import { Router } from "express";
const router = Router();

import * as teacherCtrl from '../controllers/profesores.controller'
import { authJwt } from "../middlewares";

router.post('/', [authJwt.verifyToken, authJwt.isModOrAdm], teacherCtrl.createTeacher)

router.get('/', teacherCtrl.getTeacher)

// router.get('/:studentId', studentCtrl.getStudentById)

// router.put('/:studentId', [authJwt.verifyToken, authJwt.isModOrAdm], studentCtrl.updateStudentById)

// router.delete('/:studentId', [authJwt.verifyToken, authJwt.isModOrAdm], studentCtrl.delStudentById)


export default router;