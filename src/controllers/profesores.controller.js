import Profesores from '../models/Profesores'

export const createTeacher = async (req, res) => {

    const {names, lastnames, imgUrl, dni, edad, fechadenacimiento, direccion, numerotelefono, email, rango, active} = req.body

    const newTeacher = new Profesores ({names,lastnames, imgUrl, dni, edad, fechadenacimiento, direccion, numerotelefono ,email, rango, active});

    const teacherSaved = await newTeacher.save()

    res.status(201).json({message: "Se creó al docente " + teacherSaved.names + " " + teacherSaved.lastnames})

}

export const getTeacher = async (req, res) => {
    const teachers = await Profesores.find()
    res.json(teachers)
}

// export const getStudentById = async (req, res) => {
//     const student = await Estudiante.findById(req.params.studentId);
//     res.status(200).json(student)
// }

// export const updateStudentById = async (req, res) => {
//     const updatedStudent = await Estudiante.findByIdAndUpdate(req.params.studentId, req.body,{
//         new: true
//     })

//     res.status(200).json({message: "Se actualizó el curso " + updatedStudent.names + " " + updatedStudent.lastnames})
// }

// export const delStudentById = async (req, res) => {
    
//     const { studentId } = req.params;
    
//     const deletedStudent = await Estudiante.findByIdAndDelete(studentId)   
  

//     res.status(200).json({message: "Se eliminó el curso " + deletedStudent.names + " " + deletedStudent.lastnames})    
    
// }
