const lista = [
    100, 200, 300, 500,
];

/* const calculateMean = (lista) => {
    let sumaLista = 0;
    for (i = 0; i < lista.length; i++) {
        sumaLista += lista[i];
    };
    let promedio = sumaLista / lista.length;
    return promedio;
} */

const meanOfArray = (list) => {
    let sumList = list.reduce( (acum, currentValue) => Number(acum) + Number(currentValue) );
    let mean = sumList / list.length;
    return mean;
};

const calculateMean = () => {
    let value1 = document.getElementById("inputValue1").value;
    let value2 = document.getElementById("inputValue2").value;
    let value3 = document.getElementById("inputValue3").value;

    let tempArray = [value1, value2, value3];
    let mean = meanOfArray(tempArray);
    
    let result = document.getElementById("resultP");
    result.innerText = `El promedio de los ${tempArray.length} valores es: ${mean}`;
}