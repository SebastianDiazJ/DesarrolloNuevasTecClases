//callback fn

const grados_centigrados = gradosFarenheit => (5/9)*(gradosFarenheit-32)
const mostar_Temperatura = (callbackFn,grados) =>{
    //usa la funcion que le llego como parametro
    let grados_centigrados = callbackFn(grados)
    console.log(grados_centigrados)
}

mostar_Temperatura(grados_centigrados,70)

//objetos primera forma
const Perro ={
    nombre:"pulgas",
    edad:3,
    color:"negro",
    nombrarPerro(nombre){
        return this.nombre =  nombre; 
    },
    caracteristicas : {
        raza :"buldo",
        altura: 20,
        peso: 30,
        vacunas : true ,
        alimento : "nutrecanicos"
         

    }   
}
//segunda forma
const Auto ={};
Auto.modelo = 1244;
Auto.color ="verde";
Auto.caracteristicas={
    marca: "bwm",
    cic : 2500,

}
console.log(Perro);
console.log(Auto);

//tercera forma

let Color ="rojo";
let modelo = 1674;
let caracteristicas = {
    marca:"bmw",
    cilindrajev: 2500
}
const Carro ={color,modelo,caracteristicas} 


//cuarta 
const animal = new Object();
animal.nombre = "Serpiente";
animal.comida ="Pollo";
// primera forma de acceder al metodo
console.log(Perro.nombre);
console.log(Perro.caracteristicas.alimento);
// segunda forma
console.log(Perro['nombre']);

const Arreglo = [Perro,Animal];

 
// //arreglos con POO
// Arreglo.forEach((objecto) =>{
//     //cambiar la propiedad nombre
//     objeto.nombre ="Lola";
//     //nueva propiedad
//     objeto.creadoEn=2024;

// });
console.log(Perro);
console.log(Animal);

//Destriung (obtener las propiedades)
//se obtiene el mismo nombre de la propiedad
const {color} = Perro;
console.log(color);



