import { Cliente } from "../Models/Cliente";
import { Fabricante } from "../Models/Fabricante";
import { Item } from "./IItem";
import { Pedido } from "../Models/Pedido";
import { Transportadora } from "../Models/Transportadora";

export interface IDataBase {

    pedidosEmAberto: Pedido[],
    clientes: Cliente[],
    fabricantes: Fabricante[],
    transportadoras: Transportadora[]

}