import { Fabricante } from "./Fabricante";

export class Produto {

    descricao: String;
    valor: number;
    fabricante: Fabricante; 
    codigoBarras: String;
    validade: Date;

    constructor(descricao: String, valor: number, codigoBarras:String, fabricante: Fabricante, validade: Date){
        this.descricao = descricao;
        this.valor = valor;
        this.codigoBarras = codigoBarras;
        this.validade = validade;
        this.fabricante = fabricante;
    }

}