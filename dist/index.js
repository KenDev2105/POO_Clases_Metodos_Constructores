"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class POO {
    constructor(_codigo, _nombre, _edad, _laboratorio, _parcial) {
        this.codigo = _codigo;
        this.nombre = _nombre;
        this.edad = _edad;
        this.laboratorio = _laboratorio;
        this.parcial = _parcial;
    }
    presentarEstudiante() {
        console.log("El estudiante: " + this.nombre);
        console.log("Codigo: " + this.codigo);
        console.log("Edad: " + this.edad);
        console.log("Tiene las siguientes notas - Laboratorio: " + this.laboratorio + " - Parcial: " + this.parcial);
    }
    mostrarNotas() {
        console.log("Lab: " + this.laboratorio + " Parcial: " + this.parcial);
    }
}
class redes {
    constructor(_nombre, _L1, _L2, _L3, _P1, _P2, _P3) {
        this.nombre = _nombre;
        this.L1 = _L1;
        this.L2 = _L2;
        this.L3 = _L3;
        this.P1 = _P1;
        this.P2 = _P2;
        this.P3 = _P3;
    }
    calcularNotas() {
        let prom_lab = ((this.L1 + this.L2 + this.L3) * 0.6) / 3;
        let prom_parcial = ((this.P1 + this.P2 + this.P3) * 0.4) / 3;
        let prom_final = prom_lab + prom_parcial;
        console.log("Estudiante: " + this.nombre + " L1: " + this.L1 + " L2: " + this.L2 + " L3: " + this.L3 + " P1: " + this.P1 + " P2: " + this.P2 + " P3: " + this.P3 + " Nota final: " + prom_final);
    }
}
let estudiante1 = new POO("u20250017", "Ken", 19, 10, 10);
// estudiante1.presentarEstudiante();
// estudiante1.mostrarNotas();
let estudiante2 = new redes("Ken", 10, 10, 10, 10, 10, 10);
estudiante2.calcularNotas();
/* Un GYM necesita un programa que evalué el IMC (índice de masa muscular) de
los hombres y mujeres que mes a mes se inscriben en sus membresías, el
cliente solicita que solo se coloquen sus datos respectivos para la formula y que
el programa muestre el resultado de su IM */
class GYM {
}
//# sourceMappingURL=index.js.map