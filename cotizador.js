//VARIABLES
const prodA = document.getElementById("productoA");
const prodB = document.getElementById("productoB");
const prodC = document.getElementById("productoC");
const prodD = document.getElementById("productoD");
const prodE = document.getElementById("productoE");
const btnCot = document.getElementById("btn-cotizar")
const sub = document.getElementById("subtotal");
const iva = document.getElementById("iva");
const total = document.getElementById("total");

//FUNCIONES
const getSubtotal = (a, b, c, d, e) => {
    return (a + b + c + d + e);
}

const getIva = (a, b) => {
    return (a * 0.16);
}

const getTotal = (a, b) => {
    return (a + b);
}

//EVENTOS
btnCot.addEventListener("click", () => {
    // Necesito obtener los 5 numeros a sumar
    const primerProducto = parseInt(prodA.value);
    const segundoProducto = parseInt(prodB.value);
    const tercerProducto = parseInt(prodC.value);
    const cuartoProducto = parseInt(prodD.value);
    const quintoProducto = parseInt(prodE.value);
    
    // Necesito sumar esos 5 numeros
    const res_subtotal = getSubtotal(primerProducto, segundoProducto, tercerProducto, cuartoProducto, quintoProducto)

    // Necesito expresarlos en pagina web
    sub.innerHTML = res_subtotal
    
    // Necesito sacar IVA
    const res_iva = getIva(res_subtotal)

    // Necesito expresarlo en pagina web
    iva.innerHTML = res_iva

    // Necesito sacar TOTAL
    const res_total = getTotal(res_subtotal,res_iva)

    // Necesito expresarlo en pagina web
    total.innerHTML = res_total
})