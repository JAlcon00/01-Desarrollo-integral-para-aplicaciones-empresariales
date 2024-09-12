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
var ProductCategory;
(function (ProductCategory) {
    ProductCategory["Electronics"] = "Electr\u00F3nica";
    ProductCategory["Clothing"] = "Ropa";
    ProductCategory["HomeAppliances"] = "Electrodom\u00E9sticos";
    ProductCategory["Books"] = "Libros";
    ProductCategory["Toys"] = "Juguetes";
})(ProductCategory || (ProductCategory = {}));
// Definir los estados de una orden
var OrderStatus;
(function (OrderStatus) {
    OrderStatus["Pending"] = "Pendiente";
    OrderStatus["Shipped"] = "Enviado";
    OrderStatus["Delivered"] = "Entregado";
    OrderStatus["Cancelled"] = "Cancelado";
})(OrderStatus || (OrderStatus = {}));
// Definir los métodos de pago
var PaymentMethod;
(function (PaymentMethod) {
    PaymentMethod["CreditCard"] = "Tarjeta de Cr\u00E9dito";
    PaymentMethod["PayPal"] = "PayPal";
    PaymentMethod["BankTransfer"] = "Transferencia Bancaria";
    PaymentMethod["CashOnDelivery"] = "Pago Contra Entrega";
})(PaymentMethod || (PaymentMethod = {}));
// Clase principal para la tienda en línea
var OnlineStore = /** @class */ (function () {
    function OnlineStore(productCategory, orderStatus, paymentMethod) {
        this.productCategory = productCategory;
        this.orderStatus = orderStatus;
        this.paymentMethod = paymentMethod;
    }
    OnlineStore.prototype.displayOrderDetails = function () {
        console.log("Categor\u00EDa del Producto: ".concat(this.productCategory));
        console.log("Estado de la Orden: ".concat(this.orderStatus));
        console.log("M\u00E9todo de Pago: ".concat(this.paymentMethod));
    };
    return OnlineStore;
}());
// Ejemplo de uso
var order = new OnlineStore(ProductCategory.Electronics, OrderStatus.Pending, PaymentMethod.CreditCard);
order.displayOrderDetails();
