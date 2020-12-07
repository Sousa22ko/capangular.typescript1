import { IEndereco } from "../Interfaces/IEndereco";
import { IPessoa } from "../Interfaces/IPessoa";
import { Endereco } from "./Endereco";
import { Pedido } from "./Pedido";

export class Cliente implements IPessoa{

    id:number;
    nome: String;
    cpf: String;
    pedidosAnteriores: Pedido[]
    saldo: number
    endereco: Endereco

    constructor (id: number, pessoa: IPessoa, pedidosAnteriores: Pedido[], saldo: number, endereco: Endereco){
        this.id = id;
        this.nome = pessoa.nome;
        this.cpf = pessoa.cpf;
        this.pedidosAnteriores = pedidosAnteriores;
        this.saldo = saldo;
    }

}