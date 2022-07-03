import express from 'express'
//import { json } from 'express/lib/response'
import morgan from 'morgan'
import cors from 'cors'
import pkg from '../package.json'

import { createRoles } from './libs/initialSetup'

//import routes
import cursosRoutes from './routes/cursos.routes'
import authRoutes from './routes/auth.routes'
import usersRoutes from './routes/users.routes'
import studentsRoutes from './routes/estudiantes.routes'
import teacherRoutes from './routes/profesores.routes'



const app = express()

createRoles();

app.set('pkg', pkg);

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.get('/', (req,res)=>{
    res.json({
        name: app.get('pkg').name,
        author: app.get('pkg').author,
        description: app.get('pkg').description,
        version: app.get('pkg').version        
    })
})

app.use('/api/cursos', cursosRoutes)
app.use('/api/auth', authRoutes)
app.use('/api/users', usersRoutes)
app.use('/api/student', studentsRoutes)
app.use('/api/teacher', teacherRoutes)


export default app;
