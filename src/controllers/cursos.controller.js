import Curso from '../models/Cursos'

export const createCurso = async (req, res) => {

    const {name, imgUrl, active} = req.body

    const newCurso = new Curso ({name, imgUrl, active});

    const cursoSaved = await newCurso.save()

    res.status(201).json({message: "Se creó el curso " + cursoSaved.name})

}

export const getCursos = async (req, res) => {
    const cursos = await Curso.find()
    res.json(cursos)
}

export const getCursoById = async (req, res) => {
    const curso = await Curso.findById(req.params.cursoId);
    res.status(200).json(curso)
}

export const updateCursoById = async (req, res) => {
    const updatedCurso = await Curso.findByIdAndUpdate(req.params.cursoId, req.body,{
        new: true
    })
    // res.status(204).json(updatedCurso)
    res.status(200).json({message: "Se actualizó el curso " + updatedCurso.name})
}

export const delCursoById = async (req, res) => {
    
    // Otra manera de hacerlo
    const { cursoId } = req.params;
    
    const deletedCurso = await Curso.findByIdAndDelete(cursoId)   
    // Una manera de hacerlo
    // await Curso.findByIdAndDelete(req.params.cursoId)   

    res.status(200).json({message: "Se eliminó el curso " + deletedCurso.name})    

}

// export const updateCurso = async (req, res) => {
//     res.status(400).json({message: "No se puede actualizar, ya que no hay ningún ID "})    
// }


// export const delCurso = async (req, res) => {
    
//     res.status(400).json({message: "No se puede eliminar, ya que no hay ningún ID " })    

// }