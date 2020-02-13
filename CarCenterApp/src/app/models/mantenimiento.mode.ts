import { VehiculoModel } from "./vehiculo.model";
import { FotoModel } from './foto.model';
import { MecanicoModel } from './mecanico.model';

interface IMantenimiento {
    Id:string;
    Estado:number;
    Fecha:Date;
    MecanicoId:string;
    Mecanico:MecanicoModel;
    VehiculoId:string;
    Vehiculo: VehiculoModel;
    Fotos: FotoModel[];
}

export class MantenimientoModel implements IMantenimiento{
    Id:string;
    Estado:number;
    Fecha:Date;
    MecanicoId:string;
    Mecanico:MecanicoModel;
    VehiculoId:string;
    Vehiculo: VehiculoModel;
    Fotos: FotoModel[];
}