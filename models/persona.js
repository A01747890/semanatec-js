const Sequelize = require('sequelize');

const Persona = (sequelize)=>{
    sequelize.define('persona',{
        idPersona:{
            type:Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey:true,
            allowNull: false
        },
        nombre:Sequelize.STRING(50)

    })
};
module.exports = Persona; //Como es un archivo aislado, con este comando podemos sacar a Persona