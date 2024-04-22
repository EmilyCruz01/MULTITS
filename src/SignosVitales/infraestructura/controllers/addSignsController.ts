import { Request,Response } from "express";
import { AddSignsUseCase } from "../../aplicacion/addSignsUseCase";


export class AddSignsController{
    constructor(readonly addSignsUseCase:AddSignsUseCase){}
    async run (req: Request, res:Response):Promise <void>{
        const data = req.body;
        try {
            const addSigns = await this.addSignsUseCase.run(
                data.pulso,
                data.oximetria,
                data.temperatura
            )
            if(addSigns)
            res.status(201).send({
                status:"succes",
                data:{
                    pulso: addSigns.pulso,
                    oximetria: addSigns.oximetria,
                    temperatura: addSigns.temperatura
                }
         })
        } catch (error) {
            res.status(204).send({
                status:"error",
                data:"Ocurrio un error",
                mesagges:error
            })
        }
    }
}