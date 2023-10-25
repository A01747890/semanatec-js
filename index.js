//Importar bibliotecas
const express = require("express");
const app = express()
//Traer el objeto de conexion
const sequelize = require('./util/database')
//middleware
app.use(express.json()); //Si el front manda cosas json, este comando los lee en json

//Mala práctica
app.get('/test',(request, response)=>{
    console.log("Esto no se debe de hacer pero funciona 😠");
    response.send('<h1>Servidor funcionando</h1>');
})

//Levantar el server y escuchar peticiones
sequelize.sync()
    .then(result=>{
        app.listen(8080, ()=>{
            console.log("Servidor  escuchando 😄")
        })
    }) 
    .catch(error=>console.log(error));
