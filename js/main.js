
const catalogo = [] //creacion del ArrayProductos



class producto {
    constructor(id, genero, nombre, precio, stock) {
        this.id=id;
        this.genero = genero;
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }
}


catalogo.push(new producto(01,"Buzo", "Growing", 3200, 5));
catalogo.push(new producto(02,"Buzo", "Growing2", 3200, 6));
catalogo.push(new producto(03,"Buzo", "Save", 3000, 2));
catalogo.push(new producto(04,"Buzo", "Fungi", 3200, 4));
catalogo.push(new producto(05,"Buzo", "Atenas", 3600, 4));
catalogo.push(new producto(06,"Lentes", "Boston", 1500, 3));
catalogo.push(new producto(07,"Lentes", "Balvin", 1400, 3));
catalogo.push(new producto(08,"Lentes", "Cardy", 1700, 2));
catalogo.push(new producto(09,"Lentes", "Kendal", 1300, 6));
catalogo.push(new producto(10,"Lentes", "Kurt", 1800, 5));
catalogo.push(new producto(11,"Lentes", "Nass", 1100, 7));
catalogo.push(new producto(12,"Lentes", "Nasty", 1700, 2));
catalogo.push(new producto(13,"Lentes", "Queer", 1700, 2));
catalogo.push(new producto(14,"Lentes", "Shilow", 1700, 2));
catalogo.push(new producto(15,"Lentes", "Tao", 1700, 2));
catalogo.push(new producto(16,"Lentes", "Trish", 1700, 2));
catalogo.push(new producto(17,"Medias", "Alien", 400, 6));
catalogo.push(new producto(18,"Medias", "Drake", 390, 3));
catalogo.push(new producto(19,"Medias", "Fire", 500, 2));
catalogo.push(new producto(20,"Medias", "Frute", 390, 4));
catalogo.push(new producto(21,"Medias", "Fuck", 400, 2));
catalogo.push(new producto(22,"Medias", "PrideB", 450, 6));
catalogo.push(new producto(23,"Medias", "PrideW", 400, 2));
catalogo.push(new producto(24,"Medias", "Sativa", 425, 3));
catalogo.push(new producto(25,"Medias", "Ska", 390, 2));
catalogo.push(new producto(26,"Gorro", "Good", 650, 2));
catalogo.push(new producto(27,"Gorro", "Miche", 920, 2));
catalogo.push(new producto(28,"Gorro", "Rainbow", 900, 2));
catalogo.push(new producto(29,"Remera", "NoProblem", 1200, 2));
catalogo.push(new producto(30,"Remera", "FungiR", 1900, 2));
catalogo.push(new producto(31,"Remera", "BatikSilver", 1850, 2));
catalogo.push(new producto(32,"Remera", "BatikColor", 1800, 2));
catalogo.push(new producto(33,"Accesorio", "ArosChapa", 350, 7));
catalogo.push(new producto(34,"Accesorio", "CollarMari", 700, 5));
catalogo.push(new producto(35,"Accesorio", "CollarPant", 600, 4));
catalogo.push(new producto(36,"Piluso", "Beanie", 800, 2));
catalogo.push(new producto(37,"Piluso", "PilusoNegro", 600, 2));
catalogo.push(new producto(38,"Piluso", "PilusoNeon", 600, 2));
catalogo.push(new producto(39,"Piluso", "PilusoBatik", 750, 7));
catalogo.push(new producto(40,"Piluso", "PilusoNaranja", 600, 5));
catalogo.push(new producto(41,"Piluso", "PilusoBlanco", 590, 4));
//guardar el array en formato JSON
const guardarLocal=(clave,valor)=>{localStorage.setItem(clave,valor)};

guardarLocal("listaPrpductos",JSON.stringify(catalogo));
    

console.log(catalogo);
const Buzo = catalogo.slice(0, 5);
console.log(Buzo);
const Lentes = catalogo.slice(5, 16);
console.log(Lentes);
const Medias = catalogo.slice(16, 25);
console.log(Medias);
const Gorro = catalogo.slice(25, 28);
console.log(Gorro);
const Remera = catalogo.slice(28, 32);
console.log(Remera);
const Accesorio = catalogo.slice(32, 35);
console.log(Accesorio);
const Piluso = catalogo.slice(35, 41);
console.log(Piluso);

const Economicos = catalogo.filter(producto => producto.precio <= 1000);
console.log(Economicos);


function Validar(){
let usuario=document.getElementById("usuario");
let passw=document.getElementById("pass");
if(usuario.value=="nico"&& passw.value=="1234"){
    let parrafo=document.createElement("p");
    parrafo.innerHTML="Bienvenido a Limo Tienda";
    let mensaje=document.getElementById("mensaje");
    mensaje.appendChild(parrafo);
}else{
    console.log("Error en los datos")
}
}

let boton=document.getElementById("boton");
boton.addEventListener("click",Validar);
//carrito
/*
let botonCompra=document.querySelectorAll(".botonCompra");
let carrito=[];

for(let boton of botonCompra){
boton.addEventListener("click",agregarCarrito);

}
function agregarCarrito(e){
let hijo=e.target;
let padre=hijo.parentNode;

let nombreProducto=padre.querySelector("h5").textContent;
let img=padre.querySelector("img").src;
let precio=padre.querySelector("span").textContent;

const producto={
    nombre:nombreProducto,
    img:img,
    precio:precio,
    cantidad:1
    
}

carrito.push(producto);
mostrarCarrito(producto);

}
function mostrarCarrito(producto){
let fila=document.createElement("tr");
fila.innerHTML=`<td>${producto.nombre}</td>
                <td>${producto.cantidad}</td>
                <td>${producto.precio}</td>
                <td><button class="btn btn-danger>Eliminar</button></td>`
let tbody=document.getElementById("tbody");
tbody.appendChild(fila);
}*/