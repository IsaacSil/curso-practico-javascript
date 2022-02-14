const calculateMean = (list) => {
    const sumList = list.reduce( (previousValue, currentValue) => previousValue + currentValue
    );
    let mean = sumList / list.length;
    return mean;
};

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

const esPar = (number) => {
    if (number % 2 === 0) {
        return true;
    } else {
        return false;
    };
}

const calculateMedian = (list) => {
    let orderedList = list.sort( (a,b) => a-b)
    let halfList = parseInt(orderedList.length / 2)
    let median;
    if (esPar(orderedList.length)) {
        let element1 = orderedList[halfList - 1];
        let element2 = orderedList[halfList];
        median = calculateMean([element1, element2]);
    } else {
        median = orderedList[halfList];
    };
    return median;
}