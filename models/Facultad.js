import { DataTypes } from 'sequelize'
import { sequelize } from '../database/database.js'
import {Docente} from './Docente.js'

export const Facultad = sequelize.define('facultades',
    {   

        codigoFacultad  : {
            type: DataTypes.STRING(20),
            primaryKey: true,
            allowNull: false
        },
        nombreFacultad: {
            type: DataTypes.STRING(60),
            allowNull: false
        },
    },
    {
        timestamps: false,
        onDelete: null
    }
);


Facultad.hasMany(Docente, {
    foreignKey: 'idFacultad',
    sourcekey: 'CodigoFacultad'
})

Docente.belongsTo(Facultad, {
    foreignKey: 'idFacultad',
    target: 'CodigoFacultad'
})

// const facultades = [
//     { CodigoFacultad: "ACE" , nombreFacultad: "Administrativas, Contables y Económicas" },
//     { CodigoFacultad: "DCPS" , nombreFacultad: "Derecho, Ciencias Políticas y Sociales" },
//     { CodigoFacultad: "IT" , nombreFacultad: "Ingenierías Tecnológicas" },
//     { CodigoFacultad: "BA" , nombreFacultad: "Bellas Artes" },
//     { CodigoFacultad: "CBE" , nombreFacultad: "Ciencias Básicas y de la Educación" },
//     { CodigoFacultad: "CS" , nombreFacultad: "Ciencias de la Salud" },
// ];

// facultades.forEach(facultad => Facultad.create(facultad));