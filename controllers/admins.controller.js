import { Administrador } from '../models/Administrador.js'

export const VerAdmins = async (req, res) => {
    try {
        const Admins = await Administrador.findAll();
        res.json(Admins)
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

export const FiltrarAdmin = async (req, res) => {
   try {
        const { idAdmin } = req.params;
    
        const Admin = await Administrador.findOne({
            where: {
                cedula: idAdmin
            }
        })
        res.json(Admin)
   } catch (error) {
        res.status(500).json({
            message: error.message,
        });
   }
};

export const CrearAdmin = async (req, res) => {
    try {
        const {cedula, 
        nombreUsuario,
        passwd,
        nombre,
        apellido,
        rol} = req.body;

        const newAdmin = await Administrador.create({
            cedula: cedula,
            nombreUsuario: nombreUsuario,
            passwd: passwd,
            nombre: nombre,
            apellido: apellido,
            rol: rol,
        })

        res.json(newAdmin)
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

export const ActualizarAdmin = async (req, res) => {
    try {
        const { idAdmin } = req.params;

        const {
            cedula,
            nombreUsuario,
            passwd,
            nombre,
            apellido,
        } = req.body
        

        const admin = await Administrador.findByPk(idAdmin)
        admin.cedula = cedula
        admin.nombreUsuario = nombreUsuario
        admin.passwd = passwd
        admin.nombre = nombre
        admin.apellido = apellido

        await admin.save()


        res.json(admin)
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

export const EliminarAdmin = async (req, res) => {
    try {
        const { idAdmin } = req.params;

        await Administrador.destroy({
            where: {
                cedula: idAdmin
            }
        })
        res.sendStatus(204)
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};