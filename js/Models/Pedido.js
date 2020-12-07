"use strict";
exports.__esModule = true;
exports.Pedido = void 0;
var Pedido = /** @class */ (function () {
    function Pedido(id, cliente, items, entrega, transportadora, formaDePagamento) {
        this.valores = {
            valorEstimado: 0.00,
            valorTotal: 0.00
        };
        this.impostoAplicado = false;
        this.aliquota = 0.08;
        this.taxaTransporte = 0.15;
        this.taxaJuros = 0.10;
        this.id = id;
        this.cliente = cliente;
        this.items = items;
        this.entrega = entrega;
        this.transportadora = transportadora;
        this.formaPagamento = formaDePagamento;
    }
    Pedido.prototype.calcularValorFinal = function () {
        for (var _i = 0, _a = this.items; _i < _a.length; _i++) {
            var it = _a[_i];
            this.valores.valorEstimado += (it.produto.valor * it.quantidade);
        }
        this.valores.valorTotal = this.valores.valorEstimado;
        this.valores.valorEstimado = parseFloat(this.valores.valorEstimado.toFixed(2));
        this.adicionarImposto();
        this.adicionarFrete();
        var cond = this.adicionarParcelado(this.formaPagamento);
        return this.calcularCondicoes(cond);
    };
    Pedido.prototype.adicionarImposto = function () {
        if (this.impostoAplicado == false) {
            this.valores.valorTotal = this.valores.valorTotal + (this.valores.valorEstimado * this.aliquota);
            this.impostoAplicado = true;
        }
    };
    Pedido.prototype.adicionarFrete = function () {
        if (this.entrega.entrega) {
            this.valores.valorTotal = this.valores.valorTotal + (this.valores.valorEstimado * this.taxaTransporte);
        }
    };
    Pedido.prototype.adicionarParcelado = function (formaPagamento) {
        this.formaPagamento = formaPagamento;
        if (formaPagamento.parcelado) {
            if (formaPagamento.parcelas > 6)
                this.valores.valorTotal = this.valores.valorTotal + (this.valores.valorEstimado * this.taxaJuros);
            return this.valores.valorTotal / formaPagamento.parcelas;
        }
        else
            return 0;
    };
    Pedido.prototype.calcularCondicoes = function (cond) {
        if (cond == 0)
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
    };
    Pedido.prototype.qtdProdutos = function () {
        var sum = 0;
        for (var _i = 0, _a = this.items; _i < _a.length; _i++) {
            var item = _a[_i];
            sum += item.quantidade;
        }
        return sum;
    };
    return Pedido;
}());
exports.Pedido = Pedido;
