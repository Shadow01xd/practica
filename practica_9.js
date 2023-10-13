function ordenamientoRapido(array){

    //caso base
    if (array.length <= 1){
        return array
    }

    //creacion de pivote 
    let pivote = array[array.length - 1]

    //
    let leftArray = []
    let rightArray = []
    let equalsArray = []

    for (const item of array){

        if (item < pivote){
           leftArray.push(item) 
        }else if(item === pivote){
            equalsArray.push(item)
        }else{
            rightArray.push(item)
        }
    }

    const subLeftArray = ordenamientoRapido(leftArray)
    const subRaightArray = ordenamientoRapido(rightArray)

    return{
        ...subLeftArray,
        ...equalsArray,
        ...subRaightArray
    }
}

const numeros = [-1,5,6,7,52,50,41,-100]
//console.log(ordenamientoRapido(numeros))

function metodoBurbuja(paramarray) {
    let cambiado;

    do {
        cambiado = false

        for (let i = 0; i < array.length; i++){

            if(array[i] > array[i + 1]){

                const temporal = array[i]
                array[i] = array[i+1];
                array[i+1] = temporal

                cambio = true
            }
        }

    }while(cambiando)

    return array;

}

//console.log(metodoBurbuja(numeros))

function metodoseleccion(array) {
    
    for (let i = 0; i < array.length; i++) {
        let smallesIndex = i;
        
        for (let j = i + 1; j < array.length; j++) {
        
            if (array[j] < array[smallesIndex]){
                smallesIndex = j;
            }

        }

        
    if (array[i] !== i) {
        const temporal = array[i];
        array[i] == array[smallesIndex]
        array[smallesIndex] =  temporal
    }

    }
    return array;
}
