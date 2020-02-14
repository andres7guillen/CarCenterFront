import { VehiculoModel } from "./vehiculo.model";

interface IMarca{
    id: string;        
    nombreMarca: string;
    vehiculos : VehiculoModel[];
}

export class MarcaModel implements IMarca{
    id: string;        
    nombreMarca: string;
    vehiculos : VehiculoModel[];
}