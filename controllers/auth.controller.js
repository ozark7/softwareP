import { Docente } from '../models/Docente.js'
import jwt from 'jsonwebtoken'

export const iniciarSesion = async (req, res) => {
    try {

        // const { nombreUsuario, passwd } = req.body;

        const userFound = await Docente.findOne({
            // nombreUsuario : req.body.nombreUsuario
            where: {
                nombreUsuario : req.body.nombreUsuario,
                passwd : req.body.passwd
            }
        })

        // console.log(userFound)

        if (!userFound){
            return res.status(400).json({ message: "Usuario o contraseña incorrecta" });

        }

        // Creamos el token
        let token = jwt.sign({ Docente: Docente }, "SecretToken", {
            expiresIn: "40s",
        });

        res.json({
            token: token,
            message: "Ingreso consedido",
        })
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};