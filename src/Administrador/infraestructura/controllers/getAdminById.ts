import { Request, Response } from "express";
import { GetByIdAdminCasoUso } from "../../aplicacion/getPacientByIdUseCase";

export class GetByIdAdminController{
    constructor(readonly getByIdAdmin:GetByIdAdminCasoUso){}
    async run(req:Request, res:Response){
        try {
            let id_admin = req.body.id_admin;
            console.log(req.body);
    
            let adminEncontrado = await this.getByIdAdmin.run(id_admin);
    
            if(adminEncontrado){
                return res.status(200).send({
                    status:"success",
                    data:{
                        nombre: adminEncontrado.nombre,
                        password:adminEncontrado.password
                    },
                    message:"Administrador encontrado exitosamente"
                })
            }else{
                return res.status(400).send({
                    status:"error",
                    data:[],
                    message:"Error al buscar administrador por id en getIdAdmin.controller"
                })
            }
        } catch (error) {
            console.log("Error en getIdAdmin.controller",error);
            res.status(500).send({
                status:"error",
                message:"Error en el servidor"
            })
        }
    }
}