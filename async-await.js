//para evitar el uso de collbacks para usar promesas 
//para guardar datos 


require('./connections')

const Product = require('./models/Product')


//codigo asincrono
async function main() {
    const product  = new Product({
        name: 'Teclado2',
        description: 'Coursair K68 RGB Game Keyboard',
        price: '150'
    });
    const productSaved = await product.save(); //guardamos el producto guardado 
    return productSaved;
    //console.log(productSaved);
}

//para ejecutar la funcion anterior 

main() //es una promesa 
.then(productSaved => console.log(productSaved))
.catch(err => console.log(err));