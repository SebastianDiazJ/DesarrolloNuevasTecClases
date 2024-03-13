// Clases 
class Silla {
    #precioCompraDistribuidor
    #maximoDescuento;
    #nombreVendedor
    // el numeral sirve para privar las propiedades
    constructor(nombre, color, precio) {
        this.nombre = nombre;
        this.color = color;
        this.precio = precio;
        this.modelo = "1321";
        this.#maximoDescuento = 0.3;
        this.#precioCompraDistribuidor = 1200;
        this.#nombreVendedor = "juan";
        }
    
    cambiarColor(nuevoColor) {
        this.color = nuevoColor;
    }

    cambiarPrecio(nuevoPrecio) {
        this.precio = nuevoPrecio;
    }

    cambiarModelo(nuevoModelo) {
        this.modelo = nuevoModelo;
    }

    mostrarPrecio() {
        console.log(this.precio);
    }
    cambiarNombreVendedor(nombreVendedor){
        this.#nombreVendedor = nombreVendedor;
    }
    mostrarVendedor(){
        console.log (this.#nombreVendedor);
    }
}

// Crear una instancia de la clase silla
const sillaCasa = new Silla("Rimax", "Negro", 20000);
console.log(sillaCasa);
sillaCasa.mostrarPrecio();

// Clase sillaGamer
//herencia

class SillaGamer extends Silla {
    constructor(nombre, color, precio, modelo, tamano, importada, diseño) {
        //para pasarle datos a a que hereda super hereda todo lo de la clase anterior
        super(nombre, color, precio); // Llamar al constructor de la clase base
        this.modelo = modelo; // Puedes sobrescribir el modelo si lo deseas
        this.tamano = tamano;
        this.importada = importada;
        this.diseño = diseño;
        this.material="cuero";
    }
}

// Crear una instancia de la clase sillaGamer
const nuevaSillaGamer = new SillaGamer("Sublime", "Rojo", 512, "FPJ806", 50, true, "New HUEL");
console.log(nuevaSillaGamer);
console.log(nuevaSillaGamer);
console.log(sillaCasa.cambiarNombreVendedor("color"));
console.log(SillaGamer);