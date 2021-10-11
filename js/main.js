let nombreUsuario = prompt("Por favor ingrese su nombre");



alert("Bienvenid@ a Limo Tienda " + nombreUsuario+ " !"); //mensaje de bienvenida
const catalogo = [] //creacion del ArrayProductos



class producto {
    constructor(genero, nombre, precio, stock) {
        this.genero = genero;
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }
}


catalogo.push(new producto("Buzo", "Growing", 3200, 5));
catalogo.push(new producto("Buzo", "Growing2", 3200, 6));
catalogo.push(new producto("Buzo", "Save", 3000, 2));
catalogo.push(new producto("Buzo", "Fungi", 3200, 4));
catalogo.push(new producto("Buzo", "Atenas", 3600, 4));
catalogo.push(new producto("Lentes", "Boston", 1500, 3));
catalogo.push(new producto("Lentes", "Balvin", 1400, 3));
catalogo.push(new producto("Lentes", "Cardy", 1700, 2));
catalogo.push(new producto("Lentes", "Kendal", 1300, 6));
catalogo.push(new producto("Lentes", "Kurt", 1800, 5));
catalogo.push(new producto("Lentes", "Nass", 1100, 7));
catalogo.push(new producto("Lentes", "Nasty", 1700, 2));
catalogo.push(new producto("Lentes", "Queer", 1700, 2));
catalogo.push(new producto("Lentes", "Shilow", 1700, 2));
catalogo.push(new producto("Lentes", "Tao", 1700, 2));
catalogo.push(new producto("Lentes", "Trish", 1700, 2));
catalogo.push(new producto("Medias", "Alien", 400, 6));
catalogo.push(new producto("Medias", "Drake", 390, 3));
catalogo.push(new producto("Medias", "Fire", 500, 2));
catalogo.push(new producto("Medias", "Frute", 390, 4));
catalogo.push(new producto("Medias", "Fuck", 400, 2));
catalogo.push(new producto("Medias", "PrideB", 450, 6));
catalogo.push(new producto("Medias", "PrideW", 400, 2));
catalogo.push(new producto("Medias", "Sativa", 425, 3));
catalogo.push(new producto("Medias", "Ska", 390, 2));
catalogo.push(new producto("Gorro", "Good", 650, 2));
catalogo.push(new producto("Gorro", "Miche", 920, 2));
catalogo.push(new producto("Gorro", "Rainbow", 900, 2));
catalogo.push(new producto("Remera", "NoProblem", 1200, 2));
catalogo.push(new producto("Remera", "FungiR", 1900, 2));
catalogo.push(new producto("Remera", "BatikSilver", 1850, 2));
catalogo.push(new producto("Remera", "BatikColor", 1800, 2));
catalogo.push(new producto("Accesorio", "ArosChapa", 350, 7));
catalogo.push(new producto("Accesorio", "CollarMari", 700, 5));
catalogo.push(new producto("Accesorio", "CollarPant", 600, 4));
catalogo.push(new producto("Piluso", "Beanie", 800, 2));
catalogo.push(new producto("Piluso", "PilusoNegro", 600, 2));
catalogo.push(new producto("Piluso", "PilusoNeon", 600, 2));
catalogo.push(new producto("Piluso", "PilusoBatik", 750, 7));
catalogo.push(new producto("Piluso", "PilusoNaranja", 600, 5));
catalogo.push(new producto("Piluso", "PilusoBlanco", 590, 4));

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

function elejirfiltro() {


    let filtro = parseInt(prompt(" Elegi, queres ordenarlos por precio (1) o alfabeticamente (2)? *Ingresa el numero "))
    
    if (filtro == 1) {

        console.log("Elegiste por precio")

        catalogo.sort(function (precio1, precio2) {

            if (precio1.precio > precio2.precio) { 

                return 1;
            } else if (precio1.precio < precio2.precio) {
                return -1;
            } else {
                return 0;
            }

        });
        console.log(catalogo);


    } else if (filtro == 2) {

        console.log("Elegiste alfabeticamente")

        catalogo.sort(function (a, b) {
            if (a.nombre > b.nombre) 
                return 1;
            if (a.nombre < b.nombre)
                return -1;
            return 0
        });
        console.log(catalogo);

    } else {
        console.log("error")
    }
}


elejirfiltro()