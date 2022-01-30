//Código del cuadrado
console.group(`Cuadrados`);
//const squareSide = 5;

const squarePerimeter = (side) => {
    return side * 4;
};

const squareArea = (side) => {
    return side ** 2;
};

//console.log(`Los lados del cuadrado miden: ${squareSide}cm`);
//console.log(`El perímetro del cuadrado es: ${squarePerimeter}cm`)
//console.log(`El área del cuadrado es: ${squareArea}cm2`)
console.groupEnd();


//Código del triángulo
console.group(`Triángulos`);

/* const triangleSide1 = 6,
      triangleSide2 = 6,
      triangleBase = 4,
      triangleHeight = 5.5,
      trianglePerimeter = triangleSide1 + triangleSide2 + triangleBase,
      triangleArea = (triangleBase * triangleHeight) / 2; */

const trianglePerimeter = (side1, side2, base) => {
    return side1 + side2 + base;
};

const triangleArea = (base, height) => {
    return (base * height) / 2;
};
//console.log(`Los lados del triángulo miden: ${triangleSide1}cm, ${triangleSide2}cm, ${triangleBase}cm`)
//console.log(`La altura del triángulo es: ${triangleHeight}cm`);
//console.log(`El perímetro del triángulo es: ${trianglePerimeter}cm`);
//console.log(`El área del triángulo es: ${triangleArea}cm2`);
console.groupEnd();


//Código del círculo
console.group(`Círculos`);

/* const circleRadio = 4,
      circleDiameter = circleRadio * 2,
      PI = Math.PI,
      circlePerimeter = (circleDiameter * PI),
      circleArea = (circleRadio ** 2) * PI; */

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


/* console.log(`El radio del círculo es: ${circleRadio}cm`);
console.log(`El diámetro del círculo es: ${circleDiameter}cm`);
console.log(`PI es: ${PI}`);
console.log(`El perímetro del círculo es: ${circlePerimeter}cm`);
console.log(`El área del círculo es: ${circleArea}cm2`); */
console.groupEnd();