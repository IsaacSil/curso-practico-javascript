//Helpers
const esPar = (number) => number % 2 === 0;

const meanOfArray = (list) => {
    let sumList = list.reduce( (acum, currentValue) => Number(acum) + Number(currentValue) );
    let mean = sumList / list.length;
    return mean;
};

//Calcula la mediana de un array 
const medianOfArray = (list) => {
    let sortedList = list.sort( (a,b) => a-b);
    let halfList = parseInt(sortedList.length / 2);
    let median;
    if (esPar(sortedList.length)) {
        let element1 = sortedList[halfList - 1];
        let element2 = sortedList[halfList];
        median = meanOfArray([element1, element2]);
    } else {
        median = sortedList[halfList];
    };
    return median;
}

//Calcula la mediana de una cantidad porcentual del array
const medianOfArrayTop = (list, percentage) => {
    //copy to leave the original arrangement unchanged
    let tempList = list.slice();
    //Calculate Splice's parameters
    let spliceStart = percentageQuantity(tempList.length, percentage);
    let spliceDeleteCount = tempList.length - spliceStart;

    let topArray = tempList.splice(spliceStart, spliceDeleteCount);
    let topMedian = medianOfArray(topArray);
    return topMedian;
}

//Calcula la cantidad porcentual
const percentageQuantity = (number, percentage) => {
    let newPrice = number * (100 - percentage) /100;
    return newPrice;
}

//Cálculo de mediana general
let colSalaries = colombia.map ( (person) => person.salary);
let sortedColSalaries = colSalaries.sort( (a,b) => a-b);
let colMedianSalaries = medianOfArray(sortedColSalaries);

//Cálculo de mediana top10
let colMedianSalariesTop10 = medianOfArrayTop(sortedColSalaries,10);

//Print console
console.group('Análisis de Salarios:');
console.log(`La media de salarios colombianos es: ${colMedianSalaries}`)
console.log(`La media del top10 de salarios colombianos es: ${colMedianSalariesTop10}`)
console.groupEnd;

