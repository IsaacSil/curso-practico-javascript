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

const calculateMean = (list) => {
    const sumList = list.reduce( (previousValue, currentValue) => previousValue + currentValue
    );
    let mean = sumList / list.length;
    return mean;
};