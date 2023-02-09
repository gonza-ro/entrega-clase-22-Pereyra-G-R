import express from 'express'
import {faker} from '@faker-js/faker'
/* console.clear(); */


const app = express();


faker.locale = 'es'




let id = 1
function getNextId(){
    return id++
}

//-------------------------------------------------------------------


function ProductosFaker(id) {
 
return {
    id, 
    nombre: faker.name.firstName(),
    precio: faker.finance.amount(),
    foto: faker.image.avatar()
}
}

function generarProductos(cant){
    const productos = [];
    for( let i = 0; i=cant; i++ ){
    productos.push(ProductosFaker(getNextId))
}

    return productos;
}

const cant_productos = 5;

app.get('/api/productos', (req, res) => {
    const cant = Number(req.query.cant) || cant_productos
    res.json(generarProductos(cant))
    console.log(generarProductos(cant))
})

//-------------------------------------------------------------------

/* Configurar el servidor */
const PORT = 8080;
const server = app.listen(PORT, () => {
    console.log('Server ON, in port: ', PORT);
})
server.on('error', error => console.log('Error in Server: ', error));