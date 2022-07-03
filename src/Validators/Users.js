import { check } from "express-validator";
import { validateResult } from "../helpers/ValidateHelper"

export const  validateCreateUser = [
   
   check('username')
   .exists()
   .trim()
   //.isAlphanumeric('es-ES')
   //.matches("^[A-Za-z]\\w{7,}$")
   .isLength(3,undefined)
   .withMessage('El usuario debe tener al menos 3 caracteres')
   .matches("^[A-Za-z][A-Za-z0-9_]*$")
   .withMessage('El usuario posee caractéres no válidos')
   // .custom(value => {
   //    if(value.length< 3){
   //       throw new Error('El usuario debe tener al menos 3 caracteres')
   //    }
   // })
   .not()
   .isEmpty(),

   check('email')
   .exists()
   .isEmail()
   .toLowerCase()
   .trim()
   .normalizeEmail()
   .withMessage('Email invalido')
   .not()
   .isEmpty(),

   check('password')
   .exists()
   .isLength(8)
   .withMessage('Se requiere al menos 8 caractéres para su contraseña')
   .matches("^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$")
   //^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$ NUEVO
   //^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,}$ VIEJO
   .withMessage("Se requiere al menos - Una Mayuscula - Un numero - Un caracter especial"),



   // check('roles')
   // //.trim('roles')
   // .isAlphanumeric()
   // .withMessage('Caractéres inválidos para los roles'),
   
   (req, res, next) =>{
      validateResult(req, res, next)
   }

]

