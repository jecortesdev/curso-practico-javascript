//Definir variables

// const precioOriginal = 120;
// const descuento = 18;


function calcularPrecioConDescuento(precio, descuento){
    const porcetnajeConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcetnajeConDescuento) / 100;

    return precioConDescuento;
}

function onClickButtotnDiscount(){
    const inputPrice = document.getElementById("inputPrice");
    const priceValue = inputPrice.value;


    const inputDiscount = document.getElementById("inputDiscount");
    const discountValue = inputDiscount.value;

    const precioDescuento = calcularPrecioConDescuento(priceValue, discountValue);

    const resultP = document.getElementById("resultP").innerText = "El precio con descuento es $" + precioDescuento;
}


// console.log({
//     precioOriginal,
//     descuento,
//     porcetnajeConDescuento,
//     precioConDescuento,
// });
