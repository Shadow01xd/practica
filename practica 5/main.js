/*saludar()

function saludar(){
    console.log("hola mundo");
}

saludar()

const saludarAnonimo = function(){
    saludar()
}


saludarAnonimo()

const usuario = {
    nombre: "lala",
    correo: "rickyyy@gmail.hot"
}

function agregarcorreo(nuevocorreo){
    usuario.correo = nuevocorreo
}

console.log(usuario);
agregarcorreo("rickyyyy01xd@gmail.hot")
console.log(usuario)

let a = 5
let b = 10

function suma(){
    return a + b
}

console.log(suma()); 

let suma = function(a,b){
    return a + b
}

console.log(suma(10,10))


const multiplicaion = function suma(a,b){
    return (b != 0)? a + suma(a, b-1) : 0 
}

console.log(multiplicaion(5.2));


let numero = 0

while(numero<10){
    console.log(numero)
    numero++
}

function contador(numero = 0){
    if(numero >= 10){
        return
    } 
    console.log(numero);
    contador(numero+1)
}

console.log("funcion recursiva");
contador()

function media(edad){
    function sumatoria(serie){
        let suma = 0
        serie.array.forEach(numero => {
            suma += numero
        });
        return suma
    }
    return sumatoria(datos)/ datos,length
}

const misDatos = [5,6,19,3]
console.log(`la sumatoria de mis ${misDatos} es ${media(misDatos)} `)


function mediana(datos){
    const largo = datos.length
    if (datos.length %2 == 0) {
        let mitadArreglo = largo/2
        let anterior = mitadArreglo -1
        let siguiente = mitadArreglo 
        
        console.log(datos[anterior]);
        console.log(datos[siguiente]);

        return (datos[anterior] + datos[siguiente])/2
    } else{
        let mitadArreglo = Math.round((largo)/2)
        return datos[mitadArreglo-1]
    }
}

const misDatos = [5,6,19,3]
console.log(`la sumatoria de  ${misDatos} es ${media(misDatos)} `)

console.log(mediaana(misDatos));


function multiplicar(a,b){
    arguments.forEach(numero => {
        a*=numero
    });
    return a
}

console.log("funcion de varios parametros");
console.log(multiplicar(2));
console.log(multiplicar(2,4));
console.log(multiplicar(2,4,5));
console.log(multiplicar(2,4,5,6));


function calcularModa(arr) {

    let frecuencia = {};

    arr.forEach(function (numero) {
      if (frecuencia[numero]) {
        frecuencia[numero]++;
      } else {
        frecuencia[numero] = 1;
      }
    });
  
    
    let moda;
    let maxFrecuencia = 0;
  
    for (let numero in frecuencia) {
      if (frecuencia[numero] > maxFrecuencia) {
        moda = numero;
        maxFrecuencia = frecuencia[numero];
      }
    }
  
    return moda;
  }
  
  
  const conjuntoDeDatos = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];
  const moda = calcularModa(conjuntoDeDatos);
  console.log("La moda es:", moda);
  */