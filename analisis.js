const salariosCol = colombia.map(
    function(persona){
        return persona.salary;
    }
);

const salarioColSorted = salariosCol.sort(
    function(salarioA, salarioB){
        return salarioA - salarioB;
    }
);

function esPar(numero){
    return (numero % 2 === 0)
}

function calcularMedianaArit(lista){
    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;

        }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

function medianaSalarios(lista){
    const mitad = parseInt(lista.length / 2);

    if(esPar(lista.length)){
        const personaMitadA = lista[mitad - 1];
        const personaMitadB = lista[mitad];

        const mediana = calcularMedianaArit([personaMitadA, personaMitadB]);
        return mediana;
    }else{
        const personaMitad = lista[mitad];
        return personaMitad;
    }
}
const medianaGeneralCol = medianaSalarios(salarioColSorted);

const spliceStar = (salarioColSorted.length * (90) / 100);
const spliceCount = salarioColSorted.length - spliceStar;


const salarioTop10 = salarioColSorted.splice(
    spliceStar,
    spliceCount,
);

const medianaTop10Col =medianaSalarios(salarioTop10)

console.log({
    medianaGeneralCol,
    medianaTop10Col,
});