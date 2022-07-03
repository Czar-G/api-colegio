import { Router } from "express";
const router = Router();

import * as userCtrl from '../controllers/users.controller'
import { authJwt, verifySignup } from "../middlewares";


router.post('/', [
    authJwt.verifyToken, 
    authJwt.isAdmin, 
    verifySignup.checkRolesExisted,
    verifySignup.checkDuplicateUserOrEmail], userCtrl.createUser)


export default router;