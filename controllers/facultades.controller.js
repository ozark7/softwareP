import { Facultad } from '../models/Facultad.js'

export const VerFacultades = async (req, res) => {
    try {
        const Facultades = await Facultad.findAll();
        res.json(Facultades)
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

export const FiltrarFacultad = async (req, res) => {
   try {
        const { idFacultad } = req.params;
    
        const facultad = await Facultad.findOne({
            where: {
                codigoFacultad: idFacultad,
            }
        })
        res.json(facultad)
   } catch (error) {
        res.status(500).json({
            message: error.message,
        });
   }
};

export const CrearFacultad = async (req, res) => {
    try {
        const { codigoFacultad, 
        nombreFacultad } = req.body;

        const newFacultad = await Facultad.create({
            codigoFacultad: codigoFacultad, 
            nombreFacultad: nombreFacultad
        })

        res.json(newFacultad)
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

export const ActualizarFacultad = async (req, res) => {
    try {
        const { idFacultad } = req.params;

        const { codigoFacultad, 
        nombreFacultad } = req.body;
        

        const facultad = await Facultad.findByPk(idFacultad)
        facultad.codigoFacultad = codigoFacultad
        facultad.nombreFacultad = nombreFacultad

        await facultad.save()


        res.json(facultad)
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

export const EliminarFacultad = async (req, res) => {
    try {
        const { idFacultad } = req.params;

        await Facultad.destroy({
            where: {
                codigoFacultad: idFacultad
            }
        })
        res.sendStatus(204)
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};