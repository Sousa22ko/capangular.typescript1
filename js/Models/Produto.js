"use strict";
exports.__esModule = true;
exports.Produto = void 0;
var Produto = /** @class */ (function () {
    function Produto(descricao, valor, codigoBarras, fabricante, validade) {
        this.descricao = descricao;
        this.valor = valor;
        this.codigoBarras = codigoBarras;
        this.validade = validade;
        this.fabricante = fabricante;
    }
    return Produto;
}());
exports.Produto = Produto;
