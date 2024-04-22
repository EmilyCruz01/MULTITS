import { NewSigns } from "../../infraestructura/servicios/rabbit";
import { SignosVitales } from "../../dominio/signosVitales";

export class NewSignsUseCase{
    constructor(readonly serviceNotification:NewSigns){}
    async run(signosVitales:SignosVitales){
        await this.serviceNotification.sendSigns(signosVitales)
    }
}