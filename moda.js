const lista = [1,4,2,1,2,3,4,2,2,2,1];

/* const obj1 = {};
obj1[1] = 1;
obj1[2] = 2;
obj1.peso = 50;
obj1.nombre = 'isaac'; */

//En notación de corchetes, la propiedad del objeto va entre comillas
// cuando es string, si es tipo number no es necesario comillas.
//obj1[apellido] = 'Silupú';


const modeOfArray = (arrayList) => {
    let listCount = {};
    arrayList.map( (e) => {
            if (listCount[e]) {
                listCount[e] += 1;
            } else {
                listCount[e] = 1;
            }
        }
    );
    
    let array = Object.entries(listCount); //.sort( (a,b) => a[1] - b[1]);
    let orderedArray = array.sort( (a,b) => a[1] - b[1]);
    
    let mode = orderedArray[orderedArray.length - 1][0];
    return mode;
};

const calculateMode = () => {
    let value1 = document.getElementById("inputValue1").value;
    let value2 = document.getElementById("inputValue2").value;
    let value3 = document.getElementById("inputValue3").value;

    let tempArray = [value1, value2, value3];
    let mode = modeOfArray(tempArray);

    let result = document.getElementById("resultP")
    result.innerText = `La moda de los ${tempArray.length} valores es: ${mode}`;
};