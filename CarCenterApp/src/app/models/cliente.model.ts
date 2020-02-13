import { VehiculoModel } from "./vehiculo.model";

interface IClienteModel{
        id:string;         
        tipoDocumento:string;        
        documento:string;        
        primerNombre:string;        
        segundoNombre:string;        
        primerApellido:string;        
        segundoApellido:string;        
        celular:string;        
        direccion:string;        
        email: string;
        presupuestoMaximo: number;
        vehiculos:VehiculoModel[];
}

export class ClienteModel implements IClienteModel{
        id:string;         
        tipoDocumento:string;        
        documento:string;        
        primerNombre:string;        
        segundoNombre:string;        
        primerApellido:string;        
        segundoApellido:string;        
        celular:string;        
        direccion:string;        
        email: string;
        presupuestoMaximo: number;
        vehiculos:VehiculoModel[];
}