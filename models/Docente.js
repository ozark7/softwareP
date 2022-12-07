import { DataTypes } from 'sequelize'
import { sequelize } from '../database/database.js'
import {Publicacion} from './Publicacion.js'
import bcrypt from 'bcryptjs'

export const Docente = sequelize.define('docentes',
    {   

        cedula: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            allowNull: false
        },
        nombreUsuario: {
            type: DataTypes.STRING(30),
            unique: true,
            allowNull: false
        },
        passwd: {
            type: DataTypes.STRING,
            allowNull: false
        },
        nombre: {
            type: DataTypes.STRING(40),
            allowNull: false
        },
        apellido: {
            type: DataTypes.STRING(45),
        },
        rol: {
            type: DataTypes.STRING(4),
            defaultValue: "2",
            allowNull: false
        },
    }, {
        timestamps: false,
    }
);

// Docente.hasMany(Publicacion, {as: "publicaciones", foreignKey: "autorId"});

// Publicacion.belongsTo(Docente, {as: "autor"});

Docente.hasMany(Publicacion, {
    foreignKey: 'idDocente',
    sourcekey: 'cedula'
})

Publicacion.belongsTo(Docente, {
    foreignKey: 'idDocente',
    target: 'cedula'
})

