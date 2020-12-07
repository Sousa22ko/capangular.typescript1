"use strict";
exports.__esModule = true;
exports.Cliente = void 0;
var Cliente = /** @class */ (function () {
    function Cliente(id, pessoa, pedidosAnteriores, saldo, endereco) {
        this.id = id;
        this.nome = pessoa.nome;
        this.cpf = pessoa.cpf;
        this.pedidosAnteriores = pedidosAnteriores;
        this.saldo = saldo;
    }
    return Cliente;
}());
exports.Cliente = Cliente;
