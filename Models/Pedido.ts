
import { ICondicoes } from "../Interfaces/ICondicoes";
import { IFormaPagamento } from "../Interfaces/IFormaPagamento";
import { IValores } from "../Interfaces/IValores";
import { Cliente } from "./Cliente";
import { Entrega } from "./Entrega";
import { Item } from "../Interfaces/IItem";
import { Transportadora } from "./Transportadora";

export class Pedido {

    id: number;
    cliente: Cliente;
    items: Item[];
    valores: IValores = {
        valorEstimado: 0.00,
        valorTotal:0.00
    }
    impostoAplicado: Boolean = false;
    entrega: Entrega;
    formaPagamento: IFormaPagamento;
    transportadora: Transportadora;

    aliquota = 0.08;
    taxaTransporte = 0.15;
    taxaJuros = 0.10;

    constructor(id: number, cliente:Cliente, items: Item[], entrega: Entrega, transportadora: Transportadora, formaDePagamento: IFormaPagamento){
        this.id = id;
        this.cliente = cliente;
        this.items = items;
        this.entrega = entrega;
        this.transportadora = transportadora;
        this.formaPagamento = formaDePagamento;
    }


    calcularValorFinal(): ICondicoes{

        for(let it of this.items){
            this.valores.valorEstimado += (it.produto.valor * it.quantidade); 
        }
        this.valores.valorTotal = this.valores.valorEstimado;

        this.valores.valorEstimado = parseFloat(this.valores.valorEstimado.toFixed(2));

        this.adicionarImposto();
        this.adicionarFrete();
        let cond = this.adicionarParcelado(this.formaPagamento);

        return this.calcularCondicoes(cond);
    }

    adicionarImposto() {
        if(this.impostoAplicado == false){
            this.valores.valorTotal = this.valores.valorTotal + (this.valores.valorEstimado * this.aliquota);
            this.impostoAplicado = true;
        }
    }

    adicionarFrete(){
        if(this.entrega.entrega){
            this.valores.valorTotal = this.valores.valorTotal + (this.valores.valorEstimado * this.taxaTransporte);
        }
    }

    adicionarParcelado(formaPagamento: IFormaPagamento){
        this.formaPagamento = formaPagamento;

        if(formaPagamento.parcelado){
            if(formaPagamento.parcelas > 6)
                this.valores.valorTotal = this.valores.valorTotal + (this.valores.valorEstimado * this.taxaJuros);

            return this.valores.valorTotal / formaPagamento.parcelas;
        }
        else
            return 0;
    }

    calcularCondicoes(cond: number): ICondicoes{

        if(cond == 0)
            return {
                valorFinal: parseFloat(this.valores.valorTotal.toFixed(2)),
                valorParcela: parseFloat(this.valores.valorTotal.toFixed(2)),
                prazoDeEntrega: this.transportadora.prazoMedioDeEntrega
            };
        
        else
            return {
                valorFinal: parseFloat(this.valores.valorTotal.toFixed(2)),
                valorParcela: parseFloat(cond.toFixed(2)),
                prazoDeEntrega: this.transportadora.prazoMedioDeEntrega
            };
    }

    qtdProdutos(){
        let sum = 0;

        for (let item of this.items){
            sum += item.quantidade;
        }

        return sum;
    }
}