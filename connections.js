const mongoose = require("mongoose");


const uri = "mongodb://localhost:27017/seminariocuatro";
const db = mongoose.connection;

//mensaje para cadno se conecte la base de datos 
mongoose.connect( uri); //indicar la Ip donde nos conectaremos indicando el puerto crea la base de datos 

db.once('open', _ => { //once para que se ejecute solo una vez
    console.log('Database is connected to', uri);
}) //para indicar que nos hemos conectado

//Para escuchar los errores 

db.on('error', err => { 
    console.log(err)
} )
