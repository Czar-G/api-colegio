import Estudiante from '../models/Estudiantes'

export const createStudent = async (req, res) => {

    const {names, lastnames, imgUrl, dni, edad, fechadenacimiento, direccion, numerotelefono, email, active} = req.body

    const newStudent = new Estudiante ({names,lastnames, imgUrl, dni, edad, fechadenacimiento, direccion, numerotelefono ,email, active});

    const studentSaved = await newStudent.save()

    res.status(201).json({message: "Se creó el curso " + studentSaved.names + " " + studentSaved.lastnames})

}

export const getStudent = async (req, res) => {
    const students = await Estudiante.find()
    res.json(students)
}

export const getStudentById = async (req, res) => {
    const student = await Estudiante.findById(req.params.studentId);
    res.status(200).json(student)
}

export const updateStudentById = async (req, res) => {
    const updatedStudent = await Estudiante.findByIdAndUpdate(req.params.studentId, req.body,{
        new: true
    })

    res.status(200).json({message: "Se actualizó el curso " + updatedStudent.names + " " + updatedStudent.lastnames})
}

export const delStudentById = async (req, res) => {
    
    const { studentId } = req.params;
    
    const deletedStudent = await Estudiante.findByIdAndDelete(studentId)   
  

    res.status(200).json({message: "Se eliminó el curso " + deletedStudent.names + " " + deletedStudent.lastnames})    
    
}
