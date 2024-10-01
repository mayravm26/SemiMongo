// Primero conectamos con la BBDD
require('./connections')

const { error } = require('console')
//Modelo de datos 
const Pelicula = require ('./models/Pelicula')
const Director = require ('./models/Director')


//codigo asincrono

async function main() {
  try {
    // Creamos y guardamos los directores
    const director1 = new Director({
      name: 'Steven Spielberg',
      edad: '77',
      pais: 'Estados unidos'
    });
    const director1Saved = await director1.save();

    const director2 = new Director({
      name: 'Michael Bay',
      nacimiento: '59',
      pais: 'Estados unidos'
    });
    const director2Saved = await director2.save();

    const director3 = new Director({
      name: 'Peter Jackson',
      edad: '62',
      pais: 'Nueva Zelanda'
    });
    const director3Saved = await director3.save();

    const director4 = new Director({
      name: 'James Cameron',
      edad: '70',
      pais: 'Canada'
    });
    const director4Saved = await director4.save();

    // Creamos y guardamos las películas
    const pelicula1 = new Pelicula({
      name: 'La lista de Schindler',
      genero: 'Drama',
      Año: 1993,
      Presupuesto:22,
      direct: director1Saved._id // Utilizamos el _id del director guardado
    });
    const pelicula1Saved = await pelicula1.save();

    const pelicula2 = new Pelicula({
      name: 'King Kong',
      genero: 'Acción',
      Año: 1933,
      Presupuesto:207,
      direct: director1Saved._id // Utilizamos el _id del director guardado
    });
    const pelicula2Saved = await pelicula2.save();

    const pelicula3 = new Pelicula({
      name: 'El señor de los Anillos',
      genero: 'Fantasía',
      Año: 2003,
      Presupuesto:94,
      direct: director3Saved._id // Utilizamos el _id del director guardado
    });
    const pelicula3Saved = await pelicula3.save();

    const pelicula4 = new Pelicula({
      name: 'Pearl Harbord',
      genero: 'Drama',
      Año: 2001,
      Presupuesto:140,
      direct:director3Saved._id
    });
    const pelicula4Saved = await pelicula4.save();

    const pelicula5 = new Pelicula({
      name: 'Pearl Harbord',
      genero: 'Drama',
      Año: 2001,
      Presupuesto:6,
      direct:director4Saved._id
    });
    const pelicula5Saved = await pelicula5.save();

  } catch (err) {
    console.error(err);
  }
}

//verificar

main()
.then(() => console.log('Películas y directores guardados correctamente'))
.catch(err => console.log(err));