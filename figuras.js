// Codigo del cuadrado

console.group("Cuadrado")

//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado miden: " + ladoCuadrado + " cm");

function perimetroCuadrado(lado){
    return lado * 4;
}


//console.log("EL permitero del cuadrado miden: " + perimetroCuadrado + " cm");

//const areaCuadrado = ladoCuadrado * ladoCuadrado ;
function areaCuadrado(lado){
    return lado * lado;
}
//console.log("El area del cuadrado miden: " + areaCuadrado + " cm2");
console.groupEnd;

// Codigo del triangulo
console.group("Triangulo")


// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;

// console.log(
//     "Los lados del triangulo miden: " 
//     + ladoTriangulo1 + " cm, " 
//     + ladoTriangulo2 + " cm, "
//     +  baseTriangulo + " cm"
//     );

// const alturaTriangulo = 5.5;
// console.log("La altura del triangulo es de: " + alturaTriangulo + " cm");

function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}
// console.log("El perimetro del triangulo es: " + perimetroTrianguño + " cm");

function areaTriangulo(base, altura){
    return (base * altura) / 2;
}

// console.log("EL area del triangulo es: " + areaTriangulo + " cm") ;

console.groupEnd;

// Codigo del Circulo
console.group("Circulos")

///Radio
// const radioCirculo = 4;
// console.log("EL radio  del cirdulo es: " + radioCirculo + " cm") ;


//Diametro

function diamedroCirculo(radio){
    return radio * 2;
}

//console.log("EL diametro  del cirdulo es: " + diamedroCirculo + " cm") ;


//PI
const pi = Math.PI;
// console.log("EL PI es: " + pi + " cm") ;


//Circunferencia

function perimetroCirculo(radio){
    const diametro = diamedroCirculo(radio);
    return diametro * pi;
}

// console.log("EL perimetro  del cirdulo es: " + perimetroCirculo + " cm") ;


//Area

function areaCirculo(radio){
    return (radio * radio) * pi;
}


// console.log("EL area del cirdulo es: " + areaCirculo + " cm") ;



console.groupEnd;


//Aqui interactuamos con el HTML
function calcularPerimetroCuadrado(){
    const input = document.getElementById("input-cuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
    
}
function calcularAreaCuadrado(){
    const input = document.getElementById("input-cuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}

function alturaTriangulo(trianguloGrandeLadoA, trianguloGrandeLadoB, trianguloGrandeLadoBase) {
    if (trianguloGrandeLadoA != trianguloGrandeLadoB) {
        console.error("Los lados a y b no son iguales");
    }else{
        const trianguloPequenoLadoB = trianguloGrandeLadoBase / 2;
        const trianguloPequenoLadoBase = trianguloGrandeLadoA;

        const trianguloPequenoLadoBCuadrado = trianguloPequenoLadoB * trianguloPequenoLadoB;
        const trianguloPequenoLadoBaseCuadrado = trianguloPequenoLadoBase * trianguloPequenoLadoBase;

        const trianguloPequenoLadoA = Math.sqrt(trianguloPequenoLadoBaseCuadrado - trianguloPequenoLadoBCuadrado);

        const trianguloGrandeAltura = trianguloPequenoLadoA;
        return trianguloGrandeAltura;
    }

}