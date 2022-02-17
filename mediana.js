const lista = [
    100,
    200,
    800,
    300,
    900,
    50,
    10,
    5,
];

const meanOfArray = (list) => {
    let sumList = list.reduce( (acum, currentValue) => Number(acum) + Number(currentValue) );
    let mean = sumList / list.length;
    return mean;
};

const esPar = (number) => number % 2 === 0;

const medianOfArray = (list) => {
    let sortedList = list.sort( (a,b) => a-b)
    let halfList = parseInt(sortedList.length / 2)
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

const calculateMedian = () => {
    let value1 = document.getElementById("inputValue1").value;
    let value2 = document.getElementById("inputValue2").value;
    let value3 = document.getElementById("inputValue3").value;

    let tempArray = [value1, value2, value3];
    let median = medianOfArray(tempArray);

    let result = document.getElementById("resultP")
    result.innerText = `La mediana de los ${tempArray.length} valores es: ${median}`;
};