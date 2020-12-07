import { IEndereco } from "../Interfaces/IEndereco";
import { Empresa } from "./Empresa";

export class Transportadora extends Empresa{

    prazoMedioDeEntrega: number

    constructor (nome: String, cnpj: String, endereco: IEndereco, prazoMedioDeEntrega: number){
        super(nome, cnpj, endereco);
        this.prazoMedioDeEntrega = prazoMedioDeEntrega;

    }
}