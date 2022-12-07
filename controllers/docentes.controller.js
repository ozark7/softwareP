import { Docente } from '../models/Docente.js'

export const VerDocentes = async (req, res) => {
    try {
        const Docentes = await Docente.findAll();
        res.json(Docentes)
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

export const FiltrarDocente = async (req, res) => {
    try {
        const { idDocente } = req.params;
    
        const docente = await Docente.findOne({
            where: {
                cedula: idDocente
            }
        })
        res.json(docente)
   } catch (error) {
        res.status(500).json({
            message: error.message,
        });
   }
};

export const CrearDocente = async (req, res) => {
    try {
        const {cedula, 
        nombreUsuario,
        passwd,
        nombre,
        apellido,
        rol, 
        idFacultad} = req.body;

        const newDocente = await Docente.create({
            cedula: cedula,
            nombreUsuario: nombreUsuario,
            passwd: passwd,
            nombre: nombre,
            apellido: apellido,
            rol: rol,
            idFacultad: idFacultad
        })

        res.json(newDocente)
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

export const ActualizarDocente = async (req, res) => {
    try {
        const { idDocente } = req.params;

        const {
            cedula, 
            nombreUsuario,
            passwd,
            nombre,
            apellido,
            idFacultad
        } = req.body;

        const updateDocente = await Docente.findByPk(idDocente)
        updateDocente.cedula = cedula,
        updateDocente.nombreUsuario = nombreUsuario,
        updateDocente.passwd = passwd,
        updateDocente.nombre = nombre,
        updateDocente.apellido = apellido,
        updateDocente.idFacultad = idFacultad

        await updateDocente.save()
        
        res.json(updateDocente)
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

export const EliminarDocente = async (req, res) => {
    try {
        const { idDocente } = req.params;

        await Docente.destroy({
            where: {
                cedula: idDocente
            }
        })
        res.sendStatus(204)
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};