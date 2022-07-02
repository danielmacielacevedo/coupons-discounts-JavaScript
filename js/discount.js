function calcularCantidadConDescuento(cantidad, descuento)
{
    const porcentajeCantidadConDescuento = 100 - descuento;
    const cantidadConDescuento = (cantidad * porcentajeCantidadConDescuento) / 100; 

    return cantidadConDescuento;
}

function onClickButtonDiscount()
{
    const inputCantidad = document.getElementById("inputCantidad")
    const valueCantidad = inputCantidad.value;

    const inputDescuento = document.getElementById("inputDescuento")
    const valueDescuento = inputDescuento.value;

    const cantidadFinal = calcularCantidadConDescuento(valueCantidad, valueDescuento);
    document.write

    const FinalResult = document.getElementById("resultC");
    FinalResult.innerText = "Tu cantidad con descuento es de $" + cantidadFinal;

}

function onClickButtonCupon() 
{
    const coupons = ["DIEZ", "VEINTE", "TREINTA"];

    const inputCantidadC = document.getElementById("inputCantidadC");
    const valueCantidadC = inputCantidadC.value;

    const inputCupon = document.getElementById("inputCupon");
    const valueCupon = inputCupon.value;

    let discount;

    switch (valueCupon)
    {
        case coupons[0]:
            discount = 10;
            break;
        case coupons[1]:
            discount = 28;
            break;
        case coupons[2]:
            discount = 1;
            break;

        default:
            discount = 0;
            break;            
    }

    const cantidadConCupon = calcularCantidadConDescuento(valueCantidadC, discount)
    const finalCuponResult = document.getElementById("resultCupon");
    finalCuponResult.innerText = "$" + cantidadConCupon;
}