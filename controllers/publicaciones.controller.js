import {uploadFile} from '../s3.js'
import { Publicacion } from '../models/Publicacion.js'

// const mysqlConnection = require('../database');
// import * as s from '../database.js'

export const VerPublicacionesController = async (req, res) => {
    try {
        const publicaciones = await Publicacion.findAll();
        res.json(publicaciones)
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

export const FiltrarPublicacionController = async (req, res) => {
    try {
        const { idPublicacion } = req.params;
    
        const publicacion = await Publicacion.findOne({
            where: {
                idPublicacion: idPublicacion
            }
        })
        res.json(publicacion)
   } catch (error) {
        res.status(500).json({
            message: error.message,
        });
   }

};

export const SubirPublicacionController = async (req, res) => {

    try {
        const {
            tituloPublicacion, 
            autor,
            descripcionPub,
            idDocente,
        } = req.body;
 
        const result = await uploadFile(req.files.file) 

        const file_name = req.files.file.name
        const awsUrl = 'https://awpa-aws.s3.amazonaws.com/'

        const urlPublicacion = awsUrl + file_name

        const newPublicacion = await Publicacion.create({
            tituloPublicacion: tituloPublicacion,
            autor: autor,
            descripcionPub: descripcionPub,
            urlPublicacion: urlPublicacion,
            idDocente: idDocente,
        })

        res.json(newPublicacion)
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }

    
};

export const ActualizarPublicacioController = async (req, res) => { 
    try {
        const { idPublicacion } = req.params;

        const {
            tituloPublicacion, 
            autor,
            descripcionPub,
            idDocente,
        } = req.body;
 
        const result = await uploadFile(req.files.file) 

        const file_name = req.files.file.name
        const awsUrl = 'https://awpa-aws.s3.amazonaws.com/'

        const urlPublicacion = awsUrl + file_name



        const updatePublicacion = await Publicacion.findByPk(idPublicacion)
        updatePublicacion.tituloPublicacion = tituloPublicacion
        updatePublicacion.autor = autor
        updatePublicacion.descripcionPub = descripcionPub
        updatePublicacion.urlPublicacion = urlPublicacion
        updatePublicacion.idDocente = idDocente

        await updatePublicacion.save()
        

        res.json(updatePublicacion)
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};

export const EliminarPublicacioController = async (req, res) => {
    try {
        const { idPublicacion } = req.params;

        await Publicacion.destroy({
            where: {
                idPublicacion: idPublicacion
            }
        })
        res.sendStatus(204)
    } catch (error) {
        res.status(500).json({
            message: error.message,
        });
    }
};
