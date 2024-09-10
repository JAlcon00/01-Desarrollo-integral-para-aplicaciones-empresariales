var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var miVariable = 'hola mundo';
console.log(miVariable);
var person1 = {
    firstName1: "Jesus",
    lastName1: "Almanza",
    age: 25,
};
var firstName1 = person1.firstName1, lastName1 = person1.lastName1;
console.log(firstName1, '', lastName1);
var Persona = /** @class */ (function () {
    function Persona(nombre, apellidoPaterno, apellidoMaterno, edad) {
        this.nombre = nombre;
        this.apellidoPaterno = apellidoPaterno;
        this.apellidoMaterno = apellidoMaterno;
        this.edad = edad;
    }
    Persona.prototype.getEdad = function () {
        return this.edad;
    };
    Persona.prototype.setEdad = function (edad) {
        this.edad = edad;
    };
    Persona.prototype.getNombre = function () {
        return this.nombre;
    };
    Persona.prototype.setApePaterno = function (apellidoPaterno) {
        this.apellidoPaterno = apellidoPaterno;
    };
    Persona.prototype.getApePaterno = function () {
        return this.apellidoPaterno;
    };
    Persona.prototype.setApeMaterno = function (apellidoMaterno) {
        this.apellidoMaterno = apellidoMaterno;
    };
    Persona.prototype.getApeMaterno = function () {
        return this.apellidoMaterno;
    };
    Persona.prototype.getNombreCompleto = function () {
        return "".concat(this.nombre, " ").concat(this.apellidoPaterno, " ").concat(this.apellidoMaterno);
    };
    return Persona;
}());
/*
const persona1  = new Persona('Alberto Carlos', 'DelToro', "XD", 25);
console.log(persona1);
console.log(persona1.nombre);
console.log(persona1.edad);
persona1.edad = 30;
*/
/*
let persona2 = new Persona('Jesus', 25);
persona2.setEdad(30);
*/
var persona3 = new Persona('Alberto Carlos', 'DelToro', 'Diaz', 69);
console.log(persona3.getNombreCompleto());
console.log(persona3.getEdad());
var UserAccount = /** @class */ (function () {
    function UserAccount(name, id) {
        this.name = name;
        this.id = id;
    }
    return UserAccount;
}());
var usuarioInterface = new UserAccount('Kimberly tu patrona', 1);
console.log(usuarioInterface.name, usuarioInterface.id);
var Productos = /** @class */ (function () {
    function Productos(id, nombre, precio) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
    }
    Productos.prototype.getId = function () {
        return this.id;
    };
    Productos.prototype.setId = function (id) {
        this.id = id;
    };
    Productos.prototype.getNombre = function () {
        return this.nombre;
    };
    Productos.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Productos.prototype.getPrecio = function () {
        return this.precio;
    };
    Productos.prototype.setPrecio = function (precio) {
        this.precio = precio;
    };
    Productos.prototype.mostrarProducto = function () {
        return "Producto: ".concat(this.nombre, ", Precio: ").concat(this.precio);
    };
    return Productos;
}());
var Usuario = /** @class */ (function () {
    function Usuario(id, nombre, email) {
        this.id = id;
        this.nombre = nombre;
        this.email = email;
    }
    Usuario.prototype.getId = function () {
        return this.id;
    };
    Usuario.prototype.setId = function (id) {
        this.id = id;
    };
    Usuario.prototype.getNombre = function () {
        return this.nombre;
    };
    Usuario.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Usuario.prototype.getEmail = function () {
        return this.email;
    };
    Usuario.prototype.setEmail = function (email) {
        this.email = email;
    };
    Usuario.prototype.mostrarUsuario = function () {
        return "Usuario: ".concat(this.nombre, ", Email: ").concat(this.email);
    };
    return Usuario;
}());
var Carrito = /** @class */ (function () {
    function Carrito(id, productos, total) {
        this.id = id;
        this.productos = productos;
        this.total = total;
    }
    Carrito.prototype.getId = function () {
        return this.id;
    };
    Carrito.prototype.setId = function (id) {
        this.id = id;
    };
    Carrito.prototype.getProductos = function () {
        return this.productos;
    };
    Carrito.prototype.setProductos = function (productos) {
        this.productos = productos;
    };
    Carrito.prototype.getTotal = function () {
        return this.total;
    };
    Carrito.prototype.setTotal = function (total) {
        this.total = total;
    };
    Carrito.prototype.agregarProducto = function (producto) {
        this.productos.push(producto);
        this.total += producto.getPrecio();
    };
    return Carrito;
}());
var MetodoDePago = /** @class */ (function () {
    function MetodoDePago(id, tipo, detalles) {
        this.id = id;
        this.tipo = tipo;
        this.detalles = detalles;
    }
    MetodoDePago.prototype.getId = function () {
        return this.id;
    };
    MetodoDePago.prototype.setId = function (id) {
        this.id = id;
    };
    MetodoDePago.prototype.getTipo = function () {
        return this.tipo;
    };
    MetodoDePago.prototype.setTipo = function (tipo) {
        this.tipo = tipo;
    };
    MetodoDePago.prototype.getDetalles = function () {
        return this.detalles;
    };
    MetodoDePago.prototype.setDetalles = function (detalles) {
        this.detalles = detalles;
    };
    MetodoDePago.prototype.mostrarMetodoDePago = function () {
        return "Metodo de Pago: ".concat(this.tipo, ", Detalles: ").concat(this.detalles);
    };
    return MetodoDePago;
}());
var Orden = /** @class */ (function () {
    function Orden(id, usuario, carrito) {
        this.id = id;
        this.usuario = usuario;
        this.carrito = carrito;
    }
    Orden.prototype.getId = function () {
        return this.id;
    };
    Orden.prototype.setId = function (id) {
        this.id = id;
    };
    Orden.prototype.getUsuario = function () {
        return this.usuario;
    };
    Orden.prototype.setUsuario = function (usuario) {
        this.usuario = usuario;
    };
    Orden.prototype.getCarrito = function () {
        return this.carrito;
    };
    Orden.prototype.setCarrito = function (carrito) {
        this.carrito = carrito;
    };
    Orden.prototype.mostrarOrden = function () {
        return "Orden ID: ".concat(this.id, ", Usuario: ").concat(this.usuario.getNombre(), ", Total: ").concat(this.carrito.getTotal());
    };
    return Orden;
}());
// Crear instancias de las clases
var producto1 = new Productos(1, "Laptop", 1500);
var producto2 = new Productos(2, "Mouse", 25);
var usuario1 = new Usuario(1, "Juan Perez", "juan.perez@example.com");
var carrito1 = new Carrito(1, [producto1, producto2], producto1.getPrecio() + producto2.getPrecio());
var metodoDePago1 = new MetodoDePago(1, "Tarjeta de Crédito", "Visa **** 1234");
var orden1 = new Orden(1, usuario1, carrito1);
// Imprimir resultados
console.log(producto1.mostrarProducto());
console.log(producto2.mostrarProducto());
console.log(usuario1.mostrarUsuario());
console.log(metodoDePago1.mostrarMetodoDePago());
console.log(orden1.mostrarOrden());
/*
// Función para agregar texto al contenedor HTML
function agregarTextoAlContenedor(texto: string): void {
    const outputDiv = document.getElementById('output');
    if (outputDiv) {
        const p = document.createElement('p');
        p.textContent = texto;
        outputDiv.appendChild(p);
    }
}

// Imprimir resultados en el contenedor HTML
agregarTextoAlContenedor(producto1.mostrarProducto());
agregarTextoAlContenedor(producto2.mostrarProducto());

agregarTextoAlContenedor(usuario1.mostrarUsuario());

agregarTextoAlContenedor(metodoDePago1.mostrarMetodoDePago());

agregarTextoAlContenedor(orden1.mostrarOrden());
*/
//Herencia 
var Animal = /** @class */ (function () {
    function Animal(nombre) {
        this.nombre = nombre;
    }
    Animal.prototype.mover = function (distancia) {
        if (distancia === void 0) { distancia = 0; }
        console.log("".concat(this.nombre, " se movio ").concat(distancia, "mts."));
    };
    Animal.prototype.hacerSonido = function (sonido) {
        if (sonido === void 0) { sonido = 'Sin sonido'; }
        console.log("".concat(this.nombre, " hace ").concat(sonido));
    };
    return Animal;
}());
var miAnimal = new Animal('Perro');
miAnimal.mover(5);
miAnimal.hacerSonido("Guau Guau");
var Perro = /** @class */ (function (_super) {
    __extends(Perro, _super);
    function Perro(nombre) {
        return _super.call(this, nombre) || this;
    }
    Perro.prototype.hacerSonido = function () {
        console.log("".concat(this.nombre, " hace Tu que vas a saber de fornite pinche chamaco pendejo"));
    };
    Perro.prototype.mover = function (distancia) {
        console.log("".concat(this.nombre, " se movio ").concat(distancia, "mts."));
        _super.prototype.mover.call(this, distancia);
    };
    return Perro;
}(Animal));
var miPerro = new Perro('Charls');
miPerro.mover(10);
miPerro.hacerSonido();
