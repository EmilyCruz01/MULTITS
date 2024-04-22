import express from 'express'
import { addPacienteController } from './dependencias';

export const pacienteRouter = express.Router();

pacienteRouter.post('/agregarAdmin', (req, res) => {
    addPacienteController.run(req, res)
      .then(() => {
       return null;
      })
      .catch(error => {
        console.error(error);
        res.status(500).send('Error en el archivo pacienteRoutes.ts');
    });
});