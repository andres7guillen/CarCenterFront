import { ClienteModel } from './cliente.model'
import { MarcaModel } from './marca.model';
import { MantenimientoModel } from './mantenimiento.mode';

interface IVehiculoModel {
    Id:string;        
    Placa:string;
    Color:string;
    ClienteId:string;
    Cliente:ClienteModel;
    MarcaId : string; 
    Marca: MarcaModel;
    Mantenimientos: MantenimientoModel[];
}

export class VehiculoModel implements IVehiculoModel{
    Id:string;        
    Placa:string;
    Color:string;
    ClienteId:string;
    Cliente:ClienteModel;
    MarcaId : string; 
    Marca: MarcaModel;
    Mantenimientos: MantenimientoModel[];
};