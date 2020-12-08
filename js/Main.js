"use strict";
exports.__esModule = true;
var Cliente_1 = require("./Models/Cliente");
var Entrega_1 = require("./Models/Entrega");
var Fabricante_1 = require("./Models/Fabricante");
var Pedido_1 = require("./Models/Pedido");
var Transportadora_1 = require("./Models/Transportadora");
var enderecoCliente = {
    rua: "rua das couves",
    numero: 15,
    cep: "93.325.590",
    cidade: "maravilhandia",
    pais: "Brasil"
};
var enderecoCliente2 = {
    rua: "da casa do manuel",
    numero: 61,
    cep: "93.645.590",
    cidade: "rio",
    pais: "Brasil"
};
var pessoa = {
    nome: "ze da couve",
    cpf: "123.456.789-00"
};
var pessoa2 = {
    nome: "Manuel",
    cpf: "321.534.654-77"
};
var cliente = new Cliente_1.Cliente(1, pessoa, [], 0, enderecoCliente);
var cliente2 = new Cliente_1.Cliente(2, pessoa2, [], 0, enderecoCliente2);
var enderecoFabricante = {
    rua: "rua dos alfaces",
    numero: 32,
    cep: "56.254.771",
    cidade: "belezurandia",
    pais: "Brasil"
};
var enderecoFabricante2 = {
    rua: "rua dos tomates",
    numero: 34,
    cep: "56.254.771",
    cidade: "belezurandia",
    pais: "Brasil"
};
var enderecoFabricante3 = {
    rua: "rua do ciclista",
    numero: 33,
    cep: "56.254.771",
    cidade: "belezurandia",
    pais: "Brasil"
};
var enderecoTransportadora = {
    rua: "pertinho de vc",
    numero: 55,
    cep: "00.000.001",
    cidade: "everywhere",
    pais: "Brasil"
};
var enderecoTransportadora2 = {
    rua: "logo ali",
    numero: 55,
    cep: "00.000.002",
    cidade: "everywhere",
    pais: "Brasil"
};
var fabricante = new Fabricante_1.Fabricante("Terra dos alfaces", "1592648348", enderecoFabricante);
var fabricante2 = new Fabricante_1.Fabricante("Pomar do joaquim", "1592648348", enderecoFabricante2);
var fabricante3 = new Fabricante_1.Fabricante("faz tudo", "1592648348", enderecoFabricante3);
var transportadora = new Transportadora_1.Transportadora("Leva tudo pra sua casa", "9874562311", enderecoTransportadora, 15);
var transportadora2 = new Transportadora_1.Transportadora("Chega rapido", "54321", enderecoTransportadora2, 7);
var produto1 = {
    descricao: "Couve",
    valor: 40,
    codigoBarras: 10110101101,
    fabricante: fabricante,
    validade: new Date()
};
var produto2 = {
    descricao: "Tomate",
    valor: 30,
    codigoBarras: 1011101101,
    fabricante: fabricante,
    validade: new Date()
};
var produto3 = {
    descricao: "melancia",
    valor: 5,
    codigoBarras: 10110101101,
    fabricante: fabricante2,
    validade: new Date()
};
var produto4 = {
    descricao: "Beterraba",
    valor: 30,
    codigoBarras: 1011101101,
    fabricante: fabricante3,
    validade: new Date()
};
var entrega = new Entrega_1.Entrega(true, enderecoCliente);
var entrega2 = new Entrega_1.Entrega(false, enderecoCliente2);
var formaDePagamento = {
    parcelado: true,
    cartao: "65238472-xxx",
    parcelas: 10
};
var formaDePagamento2 = {
    parcelado: false,
    cartao: "56789102372-xxx",
    parcelas: 1
};
var item1 = {
    produto: produto1,
    quantidade: 5
};
var item2 = {
    produto: produto2,
    quantidade: 7
};
var item3 = {
    produto: produto3,
    quantidade: 9
};
var item4 = {
    produto: produto4,
    quantidade: 2
};
var itensPedido = [];
var itensPedido2 = [];
itensPedido.push(item1);
itensPedido.push(item2);
itensPedido2.push(item3);
itensPedido2.push(item4);
var pedido1 = new Pedido_1.Pedido(1, cliente, itensPedido, entrega, transportadora, formaDePagamento);
var pedido2 = new Pedido_1.Pedido(2, cliente2, itensPedido2, entrega2, transportadora2, formaDePagamento2);
var database = {
    pedidosEmAberto: [pedido1, pedido2],
    clientes: [cliente],
    fabricantes: [fabricante],
    transportadoras: [transportadora]
};
for (var _i = 0, _a = database.pedidosEmAberto; _i < _a.length; _i++) {
    var pAbertos = _a[_i];
    var condicoes = pAbertos.calcularValorFinal();
    console.log("O cliente " + cliente.nome + "\ndeseja que " + (pAbertos.entrega.entrega == true ? "entregue " : "não entregue") + "um total de " + pAbertos.qtdProdutos() + " itens (Total: R$" + pAbertos.valores.valorEstimado + ")");
    console.log("divididos em " + pAbertos.formaPagamento.parcelas + "x de R$ " + condicoes.valorParcela + " somando R$ " + condicoes.valorFinal);
    if (pAbertos.entrega.entrega) {
        console.log("O pedido ser\u00E1 transportado pela \"" + pAbertos.transportadora.nome + "\" para seu endere\u00E7o na \"" + pAbertos.entrega.endereco.rua + " " + pAbertos.entrega.endereco.numero + "\" em at\u00E9 " + condicoes.prazoDeEntrega + " dias \u00FAteis");
    }
}
