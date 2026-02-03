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

/* 
let estudiante2 =  new redes("Ken", 10,0,0,10,0,0);
estudiante2.calcularNotas();
 */

/* class GYM{
    peso:number;
    altura:number;
    constructor(peso:number, altura:number){
        this.peso=peso;
        this.altura=altura;
    }

    public imc():void{
        let res = this.peso/this.altura**2
        if(res < 18.5){
            console.log("Usted tiene bajo peso " + res.toFixed(2))
        } else if(res >= 18.5 && res <= 24.9){
            console.log("Usted tiene un peso nomral " + res.toFixed(2))
        } else if(res >= 25 && res <= 29.9){
            console.log("Usted tiene sobrepeso " + res.toFixed(2))
        } else if(res >= 30){
            ("Usted tiene obesidad " + res.toFixed(2))
        } 
    }
}

let cliente = new GYM(0, 2)
cliente.imc() */

/* class conversorTemperatura {
    temp:number;

    constructor(temp:number){
    this.temp = temp
    }

    public FC(): void{
        let res = (this.temp - 32) /1.8
        console.log(res.toFixed(2))
    }

    public CF(): void{
        let res = (this.temp * 1.8) + 32
        console.log(res.toFixed(2))
    }

    public KF(): void{
        let res = (this.temp - 273.15) * 1.8 + 32
        console.log(res.toFixed(2))

    }

    public KC(): void{
        let res = this.temp - 273.15
        console.log(res.toFixed(2))
    }
}

let temperatura = new conversorTemperatura(100);
temperatura.FC()
temperatura.CF()
temperatura.KF()
temperatura.KC() */

class instituto {
    estudiante:string;
    falta:number;
    constructor(estudiante:string,falta:number){
        this.estudiante=estudiante;
        this.falta=falta
    }

    public infracción():void{
        if(this.falta==1){
            console.log("Usted " + this.estudiante + " llegó tarde debe pagar $1")
        } else if(this.falta==2){
            console.log("Usted " + this.estudiante + " anda fuera del aula en horarios de clase, debe pagar $3")
        } else if(this.falta==3){
            console.log("Usted " + this.estudiante + " no trae la vestimenta apropiada, debe pagar $5")
        } else if(this.falta==4){
            console.log("Usted " + this.estudiante + " no ha hecho uso adecuado de las instalaciónes, debe pagar $10")
        }
    }
}

let infra = new instituto("Pocho",4)
infra.infracción()