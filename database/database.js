import Sequelize from 'sequelize'

export const sequelize = new Sequelize('awpa_database', 'root', 'admin', {
    host: 'localhost',
    dialect: 'mysql'
});
