import { VehiculoModel } from "./vehiculo.model";

interface IMarca{
    Id: string;        
    NombreMarca: string;
    Vehiculos : VehiculoModel[];
}

export class MarcaModel implements IMarca{
    Id: string;        
    NombreMarca: string;
    Vehiculos : VehiculoModel[];
}