import { Request, Response } from "express";
import { DeleteUserUseCase } from "../../aplicacion/deleteUserUseCase";

export class DeleteUserController{
    constructor(readonly deleteUserUseCase:DeleteUserUseCase){}
    async run(req:Request, res:Response){
        try {
            let id_user = req.body.id_user;
            console.log(req.body);

            let deletedUser= await this.deleteUserUseCase.run(id_user);

            if(deletedUser){
                res.status(200).send({
                    message:"usuario eliminado exitosamente"
                })
            }else{
                return res.status(400).send({
                    status:"success",
                    data:[],
                    message:"Error al eliminar el usuario en deleteUserController"
                })
            }
        } catch (error) {
            console.log("Error en deleteUserController",error);
            res.status(500).send({
                status:"error",
                message:"Error en el servidor"
            })
        }
    }
}