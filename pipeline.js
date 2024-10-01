// Primero conectamos con la BBDD
require('./connections')

//Modelo de datos 
const Pelicula = require ('./models/Pelicula')
const Director = require ('./models/Director')

//Directores mayores de 60 años/Directores mayores de 60 años

const mayoredadDirectores = async() => {

    try {
  
      const pipeline = await Director.aggregate([
  
        {
  
          $match: { edad: { $gt: 60 } } //podemos modificar la edad
  
        }
  
      ]);
  
      console.log(pipeline);
  
    } catch (error) {
  
      console.error("No hay directores mayores de edad:", error);
  
    }
  
  };
  
  
  const pelismayorPresupuesto = async () => {
  
    try {
  
      const pipeline = await Pelicula.aggregate([
  
        {
  
          $match: { Presupuesto: { $gt: 100 } }
  
        }
  
      ]);
  
      console.log(pipeline);
  
    } catch (error) {
  
      console.error("Error al obtener películas con presupuesto mayor a 100 millones:", error);
  
    }
  
  };
  

  // Llamamos a las funciones
  
  mayoredadDirectores();
  pelismayorPresupuesto();