import { json } from "stream/consumers";
import { SignosVitales } from "../dominio/signosVitales";
import { SVRepo } from "../dominio/svRepo";
import { NewSignsUseCase } from "./servicios/NewSigns";



export class AddSignsUseCase{
    constructor(
        readonly svRepo:SVRepo,
        readonly newSigns:NewSignsUseCase
    ){}
    async run(
        pulso:number,
        oximetria:number,
        temperatura:number
    ):Promise<SignosVitales| null>{
        console.log(pulso,oximetria, temperatura)
        try {
            const signosVitales = await this.svRepo.addSigns(
                pulso,
                oximetria,
                temperatura
            )
            if(signosVitales)this.newSigns.run(signosVitales)
        
            return signosVitales;
        } catch (error) {
            return null;
        }
    }
}
