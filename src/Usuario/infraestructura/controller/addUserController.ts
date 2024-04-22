import { Request, Response  } from "express";
import { AddUserUseCase } from "../../aplicacion/addAminUseCase";

export class AddUserController{
    constructor(readonly addUserUseCase:AddUserUseCase){}
    async run(req:Request, res:Response){
        try{
            let id_user=req.body.id_user;
            let nombre=req.body.nombre;
            let apellido=req.body.apellido;
            let edad=req.body.edad;
            let password=req.body.password;

            let createdUser= await this.addUserUseCase.run(id_user,nombre,apellido,edad,password);

            if(createdUser){
                return res.status(200).send({
                    status: 'succes',
                    data:{
                        id_user:createdUser.id_user,
                        nombre: createdUser.nombre,
                        apellido:createdUser.apellido,
                        edad:createdUser.edad,
                        password:createdUser.password
                    },
                    message:'Usuario creado exitosamente'
                })
        } else{
            return res.status(400).send({
                status:'succes',
                data:[],
                message:'Error al resistrar el usuario addUserController'
            })
        }
    }catch(error){
        console.log('error en addUserController', error);
        res.status(500).send({
            status:'error',
            message:'error en el servidor'
        })
    }
}
}