import { Request, Response } from "express";
import { GetUserByIdUseCase } from "../../aplicacion/getUserByIdUseCase";

export class GetUserByIdController{
    constructor(readonly getUsersById:GetUserByIdUseCase){}
        async run(req:Request, res:Response){
            try{
                let id_user=req.body.id_user;
                console.log(req.body);

                let foundedUser= await this.getUsersById.run(id_user);

                if(foundedUser){
                    return res.status(200).send({
                        status:'succes',
                        data:{
                            id_user: foundedUser.id_user,
                            nombre: foundedUser.nombre,
                            apellido: foundedUser.apellido,
                            edad: foundedUser.edad,
                            password: foundedUser.password
                        },
                        message:'Usuario encontrado exitosamente'
                    })
                } else{
                    return res.status(400).send({
                        status:'error', 
                        data:[],
                        message:'error al buscar usuario getUserByIdController'
                    })
                }
            }catch(error){
                console.log("error en getAdminByIdController",error);
                res.status(500).send({
                    status:'error',
                    message:'error en el servidor'
                })
            }
        }
}