enum color {
    Rojo,
    Verde,
    Azul
}

console.log(color.Rojo); // 0
console.log(color.Verde); // 1
console.log(color.Azul); // 2

let color1 = color.Verde;
console.log(color1); // 1

let color2 = color.Azul;
console.log(color2); // 2

let color3 = color.Rojo;
console.log(color3); // 0


enum CardinalDirections {
    North = "Norte",
    South = "Sur",
    East  = "Este",
    West = "Oeste"
}

let direction1 = CardinalDirections.North;
console.log(direction1); // "Norte"


enum statusCodes{
    OK = 200,
    NotFound = 404,
    InternalServerError = 500

}

let statusCode1 = statusCodes.OK;
console.log(statusCode1); // 200


enum Volumen{
    min = 1,
    medio = 5,
    max = 10
}

let volumen: Volumen =  Volumen.medio;
console.log(volumen); // 5

let volumen2: Volumen = Volumen.min;
console.log(volumen2);


// Definir las categorías de productos
enum ProductCategory {
    Electronics = "Electrónica",
    Clothing = "Ropa",
    HomeAppliances = "Electrodomésticos",
    Books = "Libros",
    Toys = "Juguetes"
}

// Definir los estados de una orden
enum OrderStatus {
    Pending = "Pendiente",
    Shipped = "Enviado",
    Delivered = "Entregado",
    Cancelled = "Cancelado"
}

// Definir los métodos de pago
enum PaymentMethod {
    CreditCard = "Tarjeta de Crédito",
    PayPal = "PayPal",
    BankTransfer = "Transferencia Bancaria",
    CashOnDelivery = "Pago Contra Entrega"
}

// Clase principal para la tienda en línea
class OnlineStore {
    productCategory: ProductCategory;
    orderStatus: OrderStatus;
    paymentMethod: PaymentMethod;

    constructor(productCategory: ProductCategory, orderStatus: OrderStatus, paymentMethod: PaymentMethod) {
        this.productCategory = productCategory;
        this.orderStatus = orderStatus;
        this.paymentMethod = paymentMethod;
    }

    displayOrderDetails() {
        console.log(`Categoría del Producto: ${this.productCategory}`);
        console.log(`Estado de la Orden: ${this.orderStatus}`);
        console.log(`Método de Pago: ${this.paymentMethod}`);
    }
    
}

// Ejemplo de uso
const order = new OnlineStore(ProductCategory.Electronics, OrderStatus.Pending, PaymentMethod.CreditCard);
order.displayOrderDetails();