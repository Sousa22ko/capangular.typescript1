
import { Cliente } from "./Models/Cliente";
import { Entrega } from "./Models/Entrega";
import { Fabricante } from "./Models/Fabricante";
import { Pedido } from "./Models/Pedido";
import { Transportadora } from "./Models/Transportadora";

let enderecoCliente = {
    rua: "rua das couves",
    numero: 15,
    cep: "93.325.590",
    cidade: "maravilhandia",
    pais: "Brasil"
} 

let enderecoCliente2 = {
    rua: "da casa do manuel",
    numero: 61,
    cep: "93.645.590",
    cidade: "rio",
    pais: "Brasil"
} 

let pessoa = {
    nome:"ze da couve",
    cpf: "123.456.789-00"
};

let pessoa2 = {
    nome:"Manuel",
    cpf: "321.534.654-77"
};

let cliente = new Cliente(1 , pessoa, [], 0, enderecoCliente);
let cliente2 = new Cliente(2 , pessoa2, [], 0, enderecoCliente2);

let enderecoFabricante = {
    rua: "rua dos alfaces",
    numero: 32,
    cep: "56.254.771",
    cidade: "belezurandia",
    pais: "Brasil"
}

let enderecoFabricante2 = {
    rua: "rua dos tomates",
    numero: 34,
    cep: "56.254.771",
    cidade: "belezurandia",
    pais: "Brasil"
}

let enderecoFabricante3 = {
    rua: "rua do ciclista",
    numero: 33,
    cep: "56.254.771",
    cidade: "belezurandia",
    pais: "Brasil"
}

let enderecoTransportadora = {
    rua: "pertinho de vc",
    numero: 55,
    cep: "00.000.001",
    cidade: "everywhere",
    pais: "Brasil"
}

let enderecoTransportadora2 = {
    rua: "logo ali",
    numero: 55,
    cep: "00.000.002",
    cidade: "everywhere",
    pais: "Brasil"
}


let fabricante = new Fabricante("Terra dos alfaces", "1592648348", enderecoFabricante);
let fabricante2 = new Fabricante("Pomar do joaquim", "1592648348", enderecoFabricante2);
let fabricante3 = new Fabricante("faz tudo", "1592648348", enderecoFabricante3);

let transportadora = new Transportadora("Leva tudo pra sua casa", "9874562311", enderecoTransportadora, 15)
let transportadora2 = new Transportadora("Chega rapido", "54321", enderecoTransportadora2, 7)

let produto1 = {
    descricao: "Couve",
    valor: 40,
    codigoBarras: 10110101101,
    fabricante: fabricante ,
    validade: new Date()
}

let produto2 = {
    descricao:"Tomate",
    valor: 30,
    codigoBarras: 1011101101,
    fabricante: fabricante ,
    validade: new Date()
};

let produto3 = {
    descricao: "melancia",
    valor: 5,
    codigoBarras: 10110101101,
    fabricante: fabricante2 ,
    validade: new Date()
}

let produto4 = {
    descricao:"Beterraba",
    valor: 30,
    codigoBarras: 1011101101,
    fabricante: fabricante3 ,
    validade: new Date()
};

let entrega = new Entrega(true, enderecoCliente);
let entrega2 = new Entrega(false, enderecoCliente2);

let formaDePagamento = {
    parcelado: true,
    cartao: "65238472-xxx",
    parcelas: 10
}

let formaDePagamento2 = {
    parcelado: false,
    cartao: "56789102372-xxx",
    parcelas: 0
}

let item1 = {
    produto: produto1,
    quantidade: 5
}

let item2 = {
    produto: produto2,
    quantidade: 7
}

let item3 = {
    produto: produto3,
    quantidade: 9
}

let item4 = {
    produto: produto4,
    quantidade: 2
}

let itensPedido = []
let itensPedido2 = []

itensPedido.push(item1);
itensPedido.push(item2);
itensPedido2.push(item3);
itensPedido2.push(item4);

let pedido1 = new Pedido(1, cliente, itensPedido, entrega, transportadora, formaDePagamento);
let pedido2 = new Pedido(2, cliente2, itensPedido2, entrega2, transportadora2, formaDePagamento2);

var database = {
    pedidosEmAberto: [pedido1, pedido2],
    clientes: [cliente],
    fabricantes: [fabricante],
    transportadoras: [transportadora]
}


for(let pAbertos of database.pedidosEmAberto){
    let condicoes = pAbertos.calcularValorFinal();

    console.log(`O cliente ${cliente.nome}\ndeseja que ${pAbertos.entrega.entrega == true? "entregue ": "não entregue"}um total de ${pAbertos.qtdProdutos()} itens (Total: R$${pAbertos.valores.valorEstimado})`);
    console.log(`divididos em ${pAbertos.formaPagamento.parcelas}x de R$ ${condicoes.valorParcela} somando R$ ${condicoes.valorFinal}`)
    
     if(pAbertos.entrega.entrega){
         console.log(`O pedido será transportado pela "${pAbertos.transportadora.nome}" para seu endereço na "${pAbertos.entrega.endereco.rua} ${pAbertos.entrega.endereco.numero}" em até ${condicoes.prazoDeEntrega} dias úteis`)
     }
}




