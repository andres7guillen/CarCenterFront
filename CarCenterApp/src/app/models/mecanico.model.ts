import { MantenimientoModel } from './mantenimiento.mode';

interface IMecanico{
    Id: string;    
    Documento:string;    
    PrimerNombre:string;    
    SegundoNombre:string;    
    PrimerApellido: string;    
    SegundoApellido:string;    
    Celular:string;    
    Direccion:string;    
    Email: string;
    Mantenimientos: MantenimientoModel[];
}
export class MecanicoModel implements IMecanico{
    Id: string;    
    Documento:string;    
    PrimerNombre:string;    
    SegundoNombre:string;    
    PrimerApellido: string;    
    SegundoApellido:string;    
    Celular:string;    
    Direccion:string;    
    Email: string;
    Mantenimientos: MantenimientoModel[];
}