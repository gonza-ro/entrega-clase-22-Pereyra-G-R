import express from 'express'
import {faker} from '@faker-js/faker'

// Configuramos el idioma español
faker.locale = 'en'
const app = express()

let id = 1
function getNextId(){
    return id++
}

// Vamos a crear una función que nos traiga elementos de forma aleatoria
function crearAlAzar(id) {
    return {
        id,
        nombre: faker.name.firstName(),
        precio: faker.finance.amount(),
        foto: faker.image.avatar()
    }
}

function generarProductos(cant) {
    const productos = []
    for(let i = 0; i < cant; i++) {
        productos.push(crearAlAzar(getNextId()))
    }
    return productos
}



// crear variable de entorno
const CANT_PRODUCTOS = 5

app.get('/api/productos', (req, res) => {
    const cant = Number(req.query.cant) || CANT_PRODUCTOS
    res.json(generarProductos(cant))
    console.log(generarProductos(cant))
})

// Configuramos nuestro server
const PORT = 8080
const srv = app.listen(PORT, () => {
    console.log('Serer ON, in port: ' + PORT)
})
srv.on('error', error => console.log('Error en el servidor: ' + PORT))