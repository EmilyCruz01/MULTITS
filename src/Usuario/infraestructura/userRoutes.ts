import express from 'express'
import { addUserController, getUserByIdController,getAllUsersController, deleteUserController} from './dependencies';//aqui van todos los controladores

export const userRouter= express.Router();

userRouter.post('/',(req,res)=>{
    addUserController.run(req,res)
    .then(()=>{
        return null
    })
    .catch(error =>{
        console.error(error);
        res.status(500).send('Error en el archivo userRoutes');
    });
});

userRouter.get('/id',(req,res)=>{
    getUserByIdController.run(req,res)
    .then(()=>{
        return null
    })
    .catch(error =>{
        console.error(error);
        res.status(500).send('Error en el archivo userRoutes');
    });
});

userRouter.get('/all',(req,res)=>{
    getAllUsersController.run(req,res)
    .then(()=>{
        return null
    })
    .catch(error =>{
        console.error(error);
        res.status(500).send('Error en el archivo userRoutes');
    });
});

userRouter.delete('/id',(req,res)=>{
    deleteUserController.run(req,res)
    .then(()=>{
        return null
    })
    .catch(error =>{
        console.error(error);
        res.status(500).send('Error en el archivo userRoutes');
    });
});
