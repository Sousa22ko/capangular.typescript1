import { IEndereco } from "../Interfaces/IEndereco";

export class Entrega {

    entrega: Boolean;
    endereco: IEndereco;

    constructor(entrega: Boolean, endereco: IEndereco){
        this.entrega = entrega;
        this.endereco = endereco;
    }

}