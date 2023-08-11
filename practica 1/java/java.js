let edad = prompt("introdusca su edad: ")

if(edad > 18 && edad <= 100){
    alert > ("el usuario es mayor de edad")
}else if(edad < 18  && edad >=1){
    alert("el usuario es menor de edad")
}else if(edad == 18){
    alert ("el usuario tine 18")
}else if(edad > 100){
    alert("el usuario es conteranio")
}else if(edad <= 0){
    alert("edad invalida")
}


//ejercicio 2

let i = 1;
let sum = 0;
while(i <=100){
    sum += i;
    i++;
}

alert(sum)

//ejercicio 3

let num = prompt("escribe un numero: ")

for(i = 1; i <= 10; i++){
    alert(num + " por " + i + "es igual a: " + (num*i))
}