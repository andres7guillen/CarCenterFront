import { MantenimientoModel } from "./mantenimiento.mode";

interface IFoto{
    Id: string;        
    Ruta:string;
    MantenimientoId:string;
    Mantenimiento: MantenimientoModel;
}

export class FotoModel implements IFoto{
    Id: string;        
    Ruta:string;
    MantenimientoId:string;
    Mantenimiento: MantenimientoModel;
}