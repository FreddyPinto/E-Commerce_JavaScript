var productTotalAmt = document.getElementById("product-total-amt"); //shipping_charge
var shipping_charge = document.getElementById("shipping_charge");
var total_cart_amt = document.getElementById("total_cart_amt");

function checkOut() {
  alert("Hey Your Total Amout is $" + total_cart_amt.innerHTML);
}

const decreaseNumber = (event) => {
  const productId = event.target.dataset.itemId;
  var itemval = document.getElementById(`textbox-${productId}`);
  var itemprice = document.getElementById(productId);
  if (itemval.value <= 0) {
    itemval.value = 0;
    alert("Negative Not Allowed");
  } else {
    // restar una unidad al valor de items agregados al carrito de compras
    itemval.value = itemval.value - 1;
    // restar el valor del producto eliminado del carro de compras en el consolidado en nuestro card item
    productTotalAmt.innerHTML = productTotalAmt.innerHTML - 499;

    total_cart_amt.innerHTML =
      productTotalAmt.innerHTML - shipping_charge.innerHTML;

    itemval.style.backgroundColor = "white";
    itemval.style.color = "black";
  }
};

const increaseNumber = (event) => {
  const productId = event.target.dataset.itemId;
  var itemval = document.getElementById(`textbox-${productId}`);
  var itemprice = document.getElementById(productId);

  if (itemval.value >= 5) {
    itemval.value = 5;
    // una ves se tenga 5 items en el carrito de un producto si da click en agregar un producto adicional se quiere que:
    // emitir una alerta donde se muestre el mensaje "Max 5 items are allowed"
    alert("Max 5 items are allowed");
    // el input donde se muestra la cantidad de productos tenga un fondo rojo
    itemval.style.backgroundColor = "red";
    // el input donde se muestra la cantidad de productos tenga letra blanca
    itemval.style.color = "white";
  } else {
    // sumar una unidad al valor de items agregados al carrito de compras
    console.log(itemval.value);
    itemval.value = Number(itemval.value) + 1;
    // sumar el valor del producto eliminado del carro de compras en el consolidado en nuestro card item
    productTotalAmt.innerHTML = Number(productTotalAmt.innerHTML) + 499;

    total_cart_amt.innerHTML =
      Number(productTotalAmt.innerHTML) + Number(shipping_charge.innerHTML);
  }
};

// Add click event to Buttons

// obtener los botones que van restar un producto del carrito de compras
const decreaseButtons = document.getElementsByClassName("decreaseNumber");
// itera estos botones para agregar un evento "click" que ejecute la funcion decreaseNumber
[...decreaseButtons].map((button) => {
  button.addEventListener("click", (event) => decreaseNumber(event));
});

// obtener los botones que van sumar un producto del carrito de compras
const increaseButtons = document.getElementsByClassName(
  "increaseNumberButtons"
);
// itera estos botones para agregar un evento "click" que ejecute la funcion increaseNumber
[...increaseButtons].map((button) => {
  button.addEventListener("click", (event) => increaseNumber(event));
});

// obtener el boton que van a realizar el checkout del carrito de compras final
// agregar un evento "click" que ejecute la función checkOut
