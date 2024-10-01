require("./connections");

const User = require("./models/Usuario");

async function createUsers() {
  const userOne = new User({ //para que sea unico
    //definimos un nuevo usuario
    username: "faztaaa", 
    password: "12345"
  })
  await userOne.save();

  const userA = new User({ //para que sea unico
    //definimos un nuevo usuario
    username: "mayra", 
    password: "12345"
  })
  await userA.save();


  const userB = new User({ //para que sea unico
    //definimos un nuevo usuario
    username: "paola", 
    password: "12345a"
  })

  await userB.save();

}

  createUsers();