"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Fabricante = void 0;
var Empresa_1 = require("./Empresa");
var Fabricante = /** @class */ (function (_super) {
    __extends(Fabricante, _super);
    function Fabricante(nome, cnpj, endereco) {
        return _super.call(this, nome, cnpj, endereco) || this;
    }
    return Fabricante;
}(Empresa_1.Empresa));
exports.Fabricante = Fabricante;
