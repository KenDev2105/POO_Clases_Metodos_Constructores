class POO {
    codigo:string;
    nombre:string;
    edad:number;
    laboratorio: number;
    parcial: number;

    constructor(_codigo:string,_nombre:string,_edad:number,_laboratorio:number,_parcial:number) {
        this.codigo=_codigo;
        this.nombre=_nombre;
        this.edad=_edad;
        this.laboratorio=_laboratorio;
        this.parcial=_parcial
    }

public presentarEstudiante(): void {
    console.log("El estudiante: " + this.nombre);
    console.log("Codigo: " + this.codigo);
    console.log("Edad: " + this.edad);
    console.log("Tiene las siguientes notas - Laboratorio: " + this.laboratorio + " - Parcial: " + this.parcial);
}
public mostrarNotas(): void{
    console.log("Lab: "+this.laboratorio+" Parcial: " + this.parcial)
}
}

class redes {
    nombre:string;
    L1:number;
    L2:number;
    L3:number;
    P1:number;
    P2:number;
    P3:number;

    constructor(_nombre:string,_L1:number,_L2:number,_L3:number,_P1:number,_P2:number,_P3:number) {
        this.nombre=_nombre;
        this.L1=_L1;
        this.L2=_L2;
        this.L3=_L3;
        this.P1=_P1;
        this.P2=_P2;
        this.P3=_P3;
    }

public calcularNotas():void {
    let prom_lab = ((this.L1+this.L2+this.L3)*0.6)/3
    let prom_parcial = ((this.P1 + this.P2 + this.P3) * 0.4)/3
    let prom_final = prom_lab + prom_parcial
    console.log("Estudiante: " + this.nombre + " L1: " + this.L1 + " L2: " + this.L2 + " L3: " + this.L3 + " P1: " + this.P1 + " P2: " + this.P2 + " P3: " + this.P3 + " Nota final: " + prom_final)
}
}

// let estudiante1 = new POO("u20250017","Ken",19,10,10);
// estudiante1.presentarEstudiante();
// estudiante1.mostrarNotas();

let estudiante2 =  new redes("Ken", 10,0,0,10,0,0);
estudiante2.calcularNotas();
