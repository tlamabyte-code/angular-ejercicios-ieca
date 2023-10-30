// Declaración de Variables
let message: string = "hola TS";

let count: number = 42;
let isDone: boolean = false;

// Funciones
/**
 * Función que retorna un saludo
 * @param nombre
 * @returns
 */
function saludo(nombre: string | number): string {
    return `Hola ${nombre}`;
}

saludo(2);

// Clases y Herencia
class Animal {
    public nombre: string;
    private años: number;
    protected reino: string;

    constructor(nombre: string, años: number) {
        // Código extra
        this.nombre = nombre;
        this.años = años;
        this.reino = "animal";
    }

    añosHumanos(): void {
        console.log("Años humanos: ", this.años);
    }
}

class Perro extends Animal {
    constructor(nombre: string, años: number) {
        super(nombre, años);
    }

    sonido(): void {
        console.log(
            `${this.nombre} es un perro, por lo tanto ladra wow!, pertenece al reino ${this.reino}`
        );
    }
}

const perro = new Perro("firulais", 13);

// console.log(perro.sonido());

/* Interface
Permite definir contratos o estructuras de tipos para objetos y clases 
*/

interface Figura {
    name: string;
    area(): number;
}

class Circulo implements Figura {
    constructor(public radio:number, public name: string) { }

    area(): number {
        return 1
    }
}

import { MiNamespace } from './miNamespace'
import { Persona } from './modulo';


console.log(MiNamespace)
console.log(Persona)
