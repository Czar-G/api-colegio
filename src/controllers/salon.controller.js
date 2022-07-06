import Salon from '../models/Salon'

export const createSalon = async (req, res) => {

    try {
        
        const savedSS = await Salon.insertMany(req.body);
        
        res.status(201).json({message: `Se creó salón`})

    } catch (error) {
        console.log(error)
    }
        
}

export const getSalon = async (req, res) => {

    const salones = await Salon.find()

    res.json(salones)
    
}