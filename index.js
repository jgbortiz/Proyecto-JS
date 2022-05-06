
function saludo(persona){
    alert(`Hola ${persona} vienvenido a `)
}

const pedirNombre =()=> {
    let nombre = prompt("Dime tu nombre")
    saluda(nombre)
}


const usuarioContrasena = () =>{
    let usuario = prompt("Ingrese su Usuario")
    while ( usuario != "julian"){
    alert( "Usuario Incorrecto");
    usuario = prompt("Ingrese  su usuario")
    return usuario
} 

let contrasena = prompt("Ingrese la contraeña")

 while (contrasena!= "1234") {
    alert("Contraseña incorresta")
    contrasena = prompt("Ingrese la contraeña")
}   

 alert (`Hola ${usuario}, Bienvenido a Gomelski Griil & Market`)
 
 
}
const saluda=(usuario)=>{
    alert(`Bienvenido ${usuario}`)
    
}


pedirNombre()
usuarioContrasena()



// Declaración
class Producto {
    constructor(id, nombre, precio) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
    }

    toString() {
        return `${this.id}. ${this.nombre}, ${this.precio} $`;
    }
} 

const arrayProductos = [];
arrayProductos.push(new Producto(1,"Ribs", 1000));
arrayProductos.push(new Producto(2,"Picaduli", 300));
arrayProductos.push(new Producto(3,"Conserbas", 500));


const mensaje = (listaProductos) => {
    let auxMensaje = [];
    auxMensaje.push("Indica el precio del producto que buscas ");
    for (let i = 1; i < listaProductos.length; i++){
        auxMensaje.push(listaProductos[i].toString());
    }
    auxMensaje.push("Para finalizar su selección ingrese 0.");
    return auxMensaje.join("\n");
}

let elegirProductos; 
let buscarProducto;
const carrito = [];
let precio = 0;

// Ejecución
elegirProductos = parseInt(prompt(mensaje(arrayProductos)));

while ((elegirProductos > 1) && (elegirProductos <= arrayProductos.length) && (!isNaN(elegirProductos))) {
    buscarProducto = arrayProductos.find((el) => el.id === elegirProductos);
    carrito.push(buscarProducto);
    elegirProductos = parseInt(prompt(mensaje(arrayProductos)));
}

if (carrito.length > 0) {
    carrito.forEach((el) => (precio += el.precio));
    alert(`Elegiste:\n${carrito.join("\n")}\nSubtotal: ${precio} $`);
} else {
    alert("¡Selecciona una Opcion!");
}
