import { Router } from "express";
const router = Router();

import * as authCtrl from '../controllers/auth.controller'
import * as validUser from '../Validators/Users'
import { verifySignup } from "../middlewares";

router.post('/signup', validUser.validateCreateUser, verifySignup.checkDuplicateUserOrEmail,verifySignup.checkRolesExisted, authCtrl.signup) //Registrar Usuario
router.post('/signin', authCtrl.signin) //Logear Usuario
//router.post('/logout', authCtrl.logout) 

export default router;