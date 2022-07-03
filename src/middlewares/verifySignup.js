//Este modulo es un validador
import Role from '../models/Role'
import User from '../models/User'

export const checkDuplicateUserOrEmail = async function(req, res, next ) {

    const getUsername = await User.findOne({username: req.body.username})

    if(getUsername){

        return res.status(400).json({message:"Ya existe un usuario regitrado con este nombre: " + req.body.username})
        
    }
    
    const getEmail = await User.findOne({email: req.body.email})
    
    if(getEmail){

        return res.status(400).json({message:"Ya existe un email regitrado con este dato: " + req.body.email})
        
    }

    next()
};

export const checkRolesExisted = async function(req, res, next ) {
    if(req.body.roles){
        const allRoles = await Role.find({}) //Dinamico
        //const Rolesitos = ['admin','moderator','user'] //Estatico        
        //let Rolesfind = foundRoles.map(rolsitos => rolsitos.name)
        const dataFilter = await Role.find({},{_id:0,name:1}) //Dinamico
        //console.log(dataFilter)
        let Rolesfind = dataFilter.map((rolsitos) => { 
            return rolsitos.name
        })

        for(let i = 0; i < req.body.roles.length; i++){
            if(!Rolesfind.includes(req.body.roles[i])){
                return res.status(400).json({message: 'Role '+ req.body.roles[i] +' does not exist'})
            }
        }
    }
    next()  
};