const Sequelize = require('sequelize');
const {applyRelations} = require('./relations')

const sequelize = new Sequelize('semanatec','admin','Password',{
    dialect:'mysql',
    host:'database-1.cya4mlogdi7b.us-east-1.rds.amazonaws.com',
    define:{
        //Evitar que nos ponga createdAt y updateAt
        timestamps: false,
        //Pluralizar
        freezeTableName:true
    }
});

//Cargar modelos
const modelDefiners = [
    require ('../models/persona'),
    require ('../models/proyecto'),
    require ('../models/proyectoPersona')
];

//Vincular el modelo con el objeto de conexion
for(const modelDefiner of modelDefiners){
    modelDefiner(sequelize);
}

//Construir las relaciones
applyRelations(sequelize);

//export el elemento de conexión
module.exports = sequelize;
