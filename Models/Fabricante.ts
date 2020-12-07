import { IEndereco } from "../Interfaces/IEndereco";
import { Empresa } from "./Empresa";

export class Fabricante extends Empresa{

    constructor (nome: String, cnpj: String, endereco: IEndereco){
        super(nome, cnpj, endereco);

    }
}