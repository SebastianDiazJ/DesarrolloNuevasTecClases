import mongoose from "mongoose";
import express from 'express';
import { MONGO_URL, PUERTO } from "./config.js"; // Combine import statements
import { Usuario } from "./modelos/usuarioModelo.js";

const app = express();
app.use(express.json());

// Crear ruta para guardar
app.post('/registrar', async (solicitud, respuesta) => {
    try {
        let { nombre, clave } = solicitud.body;
        if (!nombre || !clave) {
            return respuesta.status(400).send('Ingrese todos los campos');
        }
        // Validar si existe usuario
        const existeUsuario = await Usuario.findOne({ nombre});
        if (existeUsuario) {
            return respuesta.status(409).send({ mensaje: 'El usuario ya existe' });
        } else {
            const user = await Usuario.create({ nombre, clave }); // Use a different variable name
            return respuesta.status(201).send(user);
        }
    } catch (error) {
        console.log(error);
        return respuesta.status(500).send({ message: error.message });
    }
});

// Conectarse a la base de datos
mongoose.connect(MONGO_URL)
    .then(() => {
        app.listen(PUERTO, () => {
            console.log(`App arriba en el puerto ${PUERTO}`); // Use backticks for template literal
        });
    })
    .catch((error) => {
        console.log(error);
    });
