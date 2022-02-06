//Código del cuadrado
console.group(`Cuadrados`);
const squarePerimeter = (side) => {
    return side * 4;
};
const squareArea = (side) => {
    return side ** 2;
};
console.groupEnd();


//Código del triángulo
console.group(`Triángulos`);
const trianglePerimeter = (side1, side2, base) => {
    return Number(side1) + Number(side2) + Number(base);
};
const triangleArea = (base, height) => {
    return (base * height) / 2;
};
console.groupEnd();


//Código del círculo
console.group(`Círculos`);

const circleDiameter = (radio) => {
    return radio * 2;
};
const PI = Math.PI;
const circlePerimeter = (radio) => {
    return circleDiameter(radio) * PI;
};
const circleArea = (radio) => {
    return (radio ** 2) * PI;
};
console.groupEnd();


//Código del triángulo isósceles
const triangleIsoHeight = (side1, side2, base) => {
    let height;
    if (side1 == side2 && side1 != base) {
        height = Math.sqrt( side1**2 - base**2/ 4 );
    }
    else
    {
        height = -1;
        console.log('Los lados 1 y 2 no son iguales');
    }
    return height;
};

//Calcula el área y perímetro de un cuadrado
const calculateSquarePerimeter = () => {
    let input = document.getElementById('squareInput');
    //let value = input.value;
    let perimeter = squarePerimeter(input.value);
    alert(`${perimeter} cm`);
};

const calculateSquareArea = () => {
    let input = document.getElementById('squareInput');
    let area = squareArea(input.value);
    alert(`${area} cm2`);
};


//Calcula el área y perímetro de un triángulo
const calculateTrianglePerimeter = () => {
    let side1 = document.getElementById('triangleSide1');
    let side2 = document.getElementById('triangleSide2');
    let base = document.getElementById('triangleBase');
    let perimeter = trianglePerimeter(side1.value, side2.value, base.value);
    alert(`${perimeter} cm`);
};

const calculateTriangleArea = () => {
    let base = document.getElementById('triangleBase');
    let height = document.getElementById('triangleHeight');
    
    let area = triangleArea(base.value, height.value);
    alert(`${area} cm2`);
};


//Calcula el diámetro, perímetro y área de un círculo
const calculateCircleDiameter = () => {
    let radius = document.getElementById('circleInput');

    let diameter = circleDiameter(radius.value);
    alert(`${diameter} cm`);
}

const calculateCirclePerimeter = () => {
    let radius = document.getElementById('circleInput');

    let perimeter = circlePerimeter(radius.value);
    alert(`${perimeter} cm`);
}

const calculateCircleArea = () => {
    let radius = document.getElementById('circleInput');

    let area = circleArea(radius.value);
    alert(`${area} cm2`);
}


//Calcula la altura del triángulo isósceles
const calculateTriangleIsoHeight = () => {
    let side1 = document.getElementById('triangleIsoSide1');
    let side2 = document.getElementById('triangleIsoSide2');
    let base = document.getElementById('triangleIsoBase');

    let height = triangleIsoHeight(side1.value, side2.value, base.value);

    alert(`${height} cm`);
}