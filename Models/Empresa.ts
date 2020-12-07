import { IEndereco } from "../Interfaces/IEndereco";

export class Empresa{

    nome: String
    cnpj: String
    endereco: IEndereco

    constructor (nome: String, cnpj: String, endereco: IEndereco){
        this.nome = nome;
        this.cnpj = cnpj;
        this.endereco = endereco;
    }
}