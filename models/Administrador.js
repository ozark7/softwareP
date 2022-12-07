import { DataTypes } from 'sequelize'
import { sequelize } from '../database/database.js'

export const Administrador = sequelize.define('administradores',
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
            defaultValue: "1",
            allowNull: false
            
        },
    },
    {
        timestamps: false,
    }
);