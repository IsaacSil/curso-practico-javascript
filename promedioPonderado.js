
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

function Curso(name, nota, peso) {
    this.name = name;
    this.nota = nota;
    this.peso = peso;
}

//Promedio ponderado de array de objetos
const WeightedAverageOfArray= (list) => {
    let productArray = list.map( (a) => a.nota * a.peso );
    let productSume = productArray.reduce( (a,b) => a + b);
    
    let weightedArray = list.map( (a) => a.peso );
    let weightedSume = weightedArray.reduce( (a,b) => Number(a) + Number(b) );
        
    let weightedAverage = productSume / weightedSume;
    return weightedAverage;
};

const calculateWeightedAverage = () => {
    let name1 = document.getElementById("inputName1").value;
    let note1 = document.getElementById("inputNote1").value;
    let weight1 = document.getElementById("inputWeight1").value;

    let name2 = document.getElementById("inputName2").value;
    let note2 = document.getElementById("inputNote2").value;
    let weight2 = document.getElementById("inputWeight2").value;

    let coursesArray = [
        new Curso(name1, note1, weight1), 
        new Curso(name2, note2, weight2)
    ];

    let mean = WeightedAverageOfArray(coursesArray);
    
    let result = document.getElementById("resultP");
    result.innerText = `El promedio de los ${coursesArray.length} valores es: ${mean}`;
};
