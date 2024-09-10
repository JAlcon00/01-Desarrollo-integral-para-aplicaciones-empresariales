let miVariable: string = 'hola mundo';

console.log(miVariable);

const person1 = {
    firstName1: "Jesus",
    lastName1: "Almanza",
    age: 25,

}

let {firstName1, lastName1} = person1;
console.log(firstName1,'', lastName1);

class Persona {
    nombre: string;
    apellidoPaterno: string;
    apellidoMaterno: string;
    edad: number;
    constructor(nombre: string, apellidoPaterno: string, apellidoMaterno: string, edad: number) {
        this.nombre = nombre;
        this.apellidoPaterno = apellidoPaterno;
        this.apellidoMaterno = apellidoMaterno;
        this.edad = edad;

    }
    getEdad(): number {
        return this.edad;
    }
    setEdad(edad: number): void {
        this.edad = edad;
    }
    getNombre(): string {
        return this.nombre;
    }
    setApePaterno(apellidoPaterno: string): void {
        this.apellidoPaterno = apellidoPaterno;
    }
    getApePaterno(): string {
        return this.apellidoPaterno;
    }
    setApeMaterno(apellidoMaterno: string): void {
        this.apellidoMaterno = apellidoMaterno;
    }
    getApeMaterno(): string {
        return this.apellidoMaterno;
    }

    getNombreCompleto(): string {
        return `${this.nombre} ${this.apellidoPaterno} ${this.apellidoMaterno}`;
    }

   
}


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

const persona3 = new Persona('Alberto Carlos', 'DelToro', 'Diaz', 69);
console.log(persona3.getNombreCompleto());
console.log(persona3.getEdad());



interface user {
    name : string;
    id : number;
}

class UserAccount{
    name : string;
    id : number;

    constructor(name: string, id: number){
        this.name = name;
        this.id = id;

    }
}

const usuarioInterface: user = new UserAccount('Kimberly tu patrona',1);

console.log(usuarioInterface.name, usuarioInterface.id);

class Productos {
    private id: number;
    private nombre: string;
    private precio: number;

    constructor(id: number, nombre: string, precio: number) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
    }

    getId(): number {
        return this.id;
    }

    setId(id: number): void {
        this.id = id;
    }

    getNombre(): string {
        return this.nombre;
    }

    setNombre(nombre: string): void {
        this.nombre = nombre;
    }

    getPrecio(): number {
        return this.precio;
    }

    setPrecio(precio: number): void {
        this.precio = precio;
    }

    mostrarProducto(): string {
        return `Producto: ${this.nombre}, Precio: ${this.precio}`;
    }
}

class Usuario {
    private id: number;
    private nombre: string;
    private email: string;

    constructor(id: number, nombre: string, email: string) {
        this.id = id;
        this.nombre = nombre;
        this.email = email;
    }

    getId(): number {
        return this.id;
    }

    setId(id: number): void {
        this.id = id;
    }

    getNombre(): string {
        return this.nombre;
    }

    setNombre(nombre: string): void {
        this.nombre = nombre;
    }

    getEmail(): string {
        return this.email;
    }

    setEmail(email: string): void {
        this.email = email;
    }

    mostrarUsuario(): string {
        return `Usuario: ${this.nombre}, Email: ${this.email}`;
    }
}

class Carrito {
    private id: number;
    private productos: Productos[];
    private total: number;

    constructor(id: number, productos: Productos[], total: number) {
        this.id = id;
        this.productos = productos;
        this.total = total;
    }

    getId(): number {
        return this.id;
    }

    setId(id: number): void {
        this.id = id;
    }

    getProductos(): Productos[] {
        return this.productos;
    }

    setProductos(productos: Productos[]): void {
        this.productos = productos;
    }

    getTotal(): number {
        return this.total;
    }

    setTotal(total: number): void {
        this.total = total;
    }

    agregarProducto(producto: Productos): void {
        this.productos.push(producto);
        this.total += producto.getPrecio();
    }
}

class MetodoDePago {
    private id: number;
    private tipo: string;
    private detalles: string;

    constructor(id: number, tipo: string, detalles: string) {
        this.id = id;
        this.tipo = tipo;
        this.detalles = detalles;
    }

    getId(): number {
        return this.id;
    }

    setId(id: number): void {
        this.id = id;
    }

    getTipo(): string {
        return this.tipo;
    }

    setTipo(tipo: string): void {
        this.tipo = tipo;
    }

    getDetalles(): string {
        return this.detalles;
    }

    setDetalles(detalles: string): void {
        this.detalles = detalles;
    }

    mostrarMetodoDePago(): string {
        return `Metodo de Pago: ${this.tipo}, Detalles: ${this.detalles}`;
    }
}

class Orden {
    private id: number;
    private usuario: Usuario;
    private carrito: Carrito;

    constructor(id: number, usuario: Usuario, carrito: Carrito) {
        this.id = id;
        this.usuario = usuario;
        this.carrito = carrito;
    }

    getId(): number {
        return this.id;
    }

    setId(id: number): void {
        this.id = id;
    }

    getUsuario(): Usuario {
        return this.usuario;
    }

    setUsuario(usuario: Usuario): void {
        this.usuario = usuario;
    }

    getCarrito(): Carrito {
        return this.carrito;
    }

    setCarrito(carrito: Carrito): void {
        this.carrito = carrito;
    }

    mostrarOrden(): string {
        return `Orden ID: ${this.id}, Usuario: ${this.usuario.getNombre()}, Total: ${this.carrito.getTotal()}`;
    }
}

// Crear instancias de las clases
const producto1 = new Productos(1, "Laptop", 1500);
const producto2 = new Productos(2, "Mouse", 25);

const usuario1 = new Usuario(1, "Juan Perez", "juan.perez@example.com");

const carrito1 = new Carrito(1, [producto1, producto2], producto1.getPrecio() + producto2.getPrecio());

const metodoDePago1 = new MetodoDePago(1, "Tarjeta de Crédito", "Visa **** 1234");

const orden1 = new Orden(1, usuario1, carrito1);

// Imprimir resultados
console.log(producto1.mostrarProducto());
console.log(producto2.mostrarProducto());

console.log(usuario1.mostrarUsuario());

console.log(metodoDePago1.mostrarMetodoDePago());

console.log(orden1.mostrarOrden());

