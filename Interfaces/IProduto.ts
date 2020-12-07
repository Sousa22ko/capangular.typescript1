import { Fabricante } from "../Models/Fabricante";

export interface IProduto{

    descricao: String;
    valor: number;
    codigoBarras: boolean[],
    fabricante: Fabricante 
    validade: Date
    
}