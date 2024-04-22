import express from 'express';
import {correrBaseDatos} from './db/database';
import { adminRouter } from './Administrador/infraestructura/adminRoutes';
import { svRouter } from './SignosVitales/infraestructura/SVRoutes';
import { userRouter } from './Usuario/infraestructura/userRoutes';
import { pacienteRouter } from './Paciente/infraestructura/pacienteRoutes';

import cors from "cors";

const app = express();


app.use(express.json()); 
app.use(cors());


app.use('api/admin',adminRouter);
app.use('api/users',userRouter);
app.use('api/sv',svRouter);
app.use('api/pacientes',pacienteRouter);


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:5173"); 
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

async function iniciarServidor(){
    try {
        await correrBaseDatos();
        app.listen(3000, ()=>{
            console.log("Servidor corriendo en el puerto 3000");
        })
    } catch (error) {
        console.log("Error al iniciar el servidor", error);
    }
}

iniciarServidor();