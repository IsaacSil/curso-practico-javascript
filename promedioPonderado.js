
const list1 = [
    [5,2],
    [15,3],
    [18,4],
    [20,1]
]

//Promedio ponderado de array de arrays
/* const calculateWeightedAverage = (list) => {
    let productArray = list.map( (a) => a[0] * a[1] );
    let productSume = productArray.reduce( (a,b) => a + b);
    
    let weightedArray = list.map( (a) => a[1] );
    let weightedSume = weightedArray.reduce( (a,b) => a + b);
    
    
    let weightedAverage = productSume / weightedSume;
    return weightedAverage;
}; */

const list2 = [
    {curso: 'Matemática', nota: 8, peso: 2},
    {curso: 'Literatura', nota: 15, peso: 3},
    {curso: 'Física', nota: 18, peso: 4},
    {curso: 'Química', nota: 20, peso: 1}
]

//Promedio ponderado de array de objetos
const calculateWeightedAverage = (list) => {
    let productArray = list.map( (a) => a.nota * a.peso );
    let productSume = productArray.reduce( (a,b) => a + b);
    
    let weightedArray = list.map( (a) => a.peso );
    let weightedSume = weightedArray.reduce( (a,b) => a + b);
        
    let weightedAverage = productSume / weightedSume;
    return weightedAverage;
};


