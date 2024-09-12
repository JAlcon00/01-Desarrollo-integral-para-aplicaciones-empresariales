var color;
(function (color) {
    color[color["Rojo"] = 0] = "Rojo";
    color[color["Verde"] = 1] = "Verde";
    color[color["Azul"] = 2] = "Azul";
})(color || (color = {}));
console.log(color.Rojo); // 0
console.log(color.Verde); // 1
console.log(color.Azul); // 2
var color1 = color.Verde;
console.log(color1); // 1
var color2 = color.Azul;
console.log(color2); // 2
var color3 = color.Rojo;
console.log(color3); // 0
var CardinalDirections;
(function (CardinalDirections) {
    CardinalDirections["North"] = "Norte";
    CardinalDirections["South"] = "Sur";
    CardinalDirections["East"] = "Este";
    CardinalDirections["West"] = "Oeste";
})(CardinalDirections || (CardinalDirections = {}));
var direction1 = CardinalDirections.North;
console.log(direction1); // "Norte"
var statusCodes;
(function (statusCodes) {
    statusCodes[statusCodes["OK"] = 200] = "OK";
    statusCodes[statusCodes["NotFound"] = 404] = "NotFound";
    statusCodes[statusCodes["InternalServerError"] = 500] = "InternalServerError";
})(statusCodes || (statusCodes = {}));
var statusCode1 = statusCodes.OK;
console.log(statusCode1); // 200
var Volumen;
(function (Volumen) {
    Volumen[Volumen["min"] = 1] = "min";
    Volumen[Volumen["medio"] = 5] = "medio";
    Volumen[Volumen["max"] = 10] = "max";
})(Volumen || (Volumen = {}));
var volumen = Volumen.medio;
console.log(volumen); // 5
var volumen2 = Volumen.min;
console.log(volumen2);
// Definir las categorías de productos
var ProductCategory = {
    Electronics: "Electrónica",
    Clothing: "Ropa",
    HomeAppliances: "Electrodomésticos",
    Books: "Libros",
    Toys: "Juguetes"
};
// Definir los estados de una orden
var OrderStatus = {
    Pending: "Pendiente",
    Shipped: "Enviado",
    Delivered: "Entregado",
    Cancelled: "Cancelado"
};
// Definir los métodos de pago
var PaymentMethod = {
    CreditCard: "Tarjeta de Crédito",
    PayPal: "PayPal",
    BankTransfer: "Transferencia Bancaria",
    CashOnDelivery: "Pago Contra Entrega"
};
// Función para imprimir los enums en el HTML
function printEnums() {
    var productCategoryDiv = document.getElementById('product-category');
    var orderStatusDiv = document.getElementById('order-status');
    var paymentMethodDiv = document.getElementById('payment-method');
    productCategoryDiv.innerHTML = "<h3>Categor\u00EDas de Productos</h3><ul>".concat(Object.values(ProductCategory).map(function (value) { return "<li>".concat(value, "</li>"); }).join(''), "</ul>");
    orderStatusDiv.innerHTML = "<h3>Estados de Orden</h3><ul>".concat(Object.values(OrderStatus).map(function (value) { return "<li>".concat(value, "</li>"); }).join(''), "</ul>");
    paymentMethodDiv.innerHTML = "<h3>M\u00E9todos de Pago</h3><ul>".concat(Object.values(PaymentMethod).map(function (value) { return "<li>".concat(value, "</li>"); }).join(''), "</ul>");
}
// Llamar a la función cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', printEnums);
