const carrito = document.querySelector("#carrito");
const listaProductos = document.querySelector("#listaProductos");
const contenedorCarrito = document.querySelector("#listaCarrito tbody");
const vaciarCarritoBtn = document.querySelector("#vaciarCarrito");
let articulosCarrito = [];

cargarEventListeners();

function cargarEventListeners() {
    //Cuando agregas un producto presionadno "Agregar al carrito"
    listaProductos.addEventListener("click", agregarProducto);

    //Elimina los productos del carrito
    carrito.addEventListener("click", eliminarProducto);

    //Vaciar carrito
    vaciarCarritoBtn.addEventListener("click", () => {
        articulosCarrito = []; //reseteamos el carrito

        limpiarHtml(); //eliminamos todo el html
    });
    document.addEventListener('DOMContentLoaded', () => {

        articulosCarrito = JSON.parse(localStorage.getItem('carrito')) || [];

        carritoHTML();
    })
}


//funciones

function agregarProducto(e) {
    e.preventDefault();
    if (e.target.classList.contains("botonCompra")) {
        const productoSeleccionado = e.target.parentElement;
        leerDatosProductos(productoSeleccionado);


    }
}
//Eliminar productos del carrito
function eliminarProducto(e) {
    if (e.target.classList.contains("borrarProducto")) {
        const productoId = e.target.getAttribute("data-id");
        //Elimina del arreglo de articuloCarrito por el data-id
        articulosCarrito = articulosCarrito.filter(producto => producto.id !== productoId);
        carritoHtml(); //itineramos el carrito y lo reflejamos en el html
    }
}

//lee el contenido del html al que le dimos click y extrae la informacion del producto
function leerDatosProductos(producto) {
    //console.log(producto);

    //crear un objeto con el contendio del producto actual
    const infoProducto = {
        imagen: producto.querySelector("img").src,
        titulo: producto.querySelector("h5").textContent,
        precio: producto.querySelector("span").textContent,
        id: producto.querySelector("button").getAttribute("data-id"),
        cantidad: 1
    }

    //revisa si un producto ya existe en el carrito
    const existe = articulosCarrito.some(producto => producto.id === infoProducto.id);
    if (existe) {
        //Actualizamos la cantidad
        const productos = articulosCarrito.map(producto => {
            if (producto.id === infoProducto.id) {
                producto.cantidad++;
                Number(producto.precio = producto.precio * producto.cantidad);
                Swal.fire({
                    title: 'Agregado!',
                    text: "Agrego al carrito " + infoProducto.titulo,
                    imageUrl: infoProducto.imagen,
                    imageWidth: 400,
                    imageHeight: 400,
                    imageAlt: 'Custom image',
                })
                return producto;

                //retorna el objeto actualizado

            } else {
                return producto; //retorna los productos no duplicados
            }
        });
        articulosCarrito = [...productos];
    } else {
        //agregamos el producto al carrito
        articulosCarrito = [...articulosCarrito, infoProducto];

        Swal.fire({
            title: 'Agregado!',
            text: "Agrego al carrito " + infoProducto.titulo,
            imageUrl: infoProducto.imagen,
            imageWidth: 400,
            imageHeight: 400,
            imageAlt: 'Custom image',
        })
    }


    //agregar elementos al arreglo de carrito


    console.log(articulosCarrito);
    carritoHtml();

}
//mostrar el carrito en html

function carritoHtml() {

    //Limpiar el html
    limpiarHtml();

    //Recorre el carrito y genera html
    articulosCarrito.forEach(producto => {
        const row = document.createElement("tr");
        row.innerHTML = `<td><img src="${producto.imagen}" width="100"</td>
                   <td>${producto.titulo }</td>
                   <td>${producto.cantidad}</td>
                    <td>${producto.precio}</td>
                    <td><button class="btn btn-danger borrarProducto" data-id="${producto.id}">X</button> </td>           `;

        // agrega el html en el tbody
        contenedorCarrito.appendChild(row);
    });
    //guardar el arreglo articuloscarritos
    sincronizarStorage();

    function sincronizarStorage() {

        localStorage.setItem('carrito', JSON.stringify(articulosCarrito));

    }
}

//Eliminar los productos de tbody

function limpiarHtml() {
    while (contenedorCarrito.firstChild) {
        contenedorCarrito.removeChild(contenedorCarrito.firstChild)
    }
};

function getLS() {

    if (localStorage.getItem('carrito') === null) {

        productsCheck = []

    } else {

        productsCheck = JSON.parse(localStorage.getItem('carrito'));

    }
    return productsCheck;

}

function finalizar() {
    Swal.fire({
        title: 'Comprado!',
        text: "Felicidades, tu compra se realizo con exito!",

    })
}

function totalLive() {

    total = 0
    totalProd = getLS();

    for (let i = 0; i < totalProd.length; i++) {


        let element = Number(totalProd[i].precio * totalProd[i].cantidad);

        total = total + element;

        console.log(total);


        $("#precioTablaTotal").html(`$ ${total.toLocalString('es')}`)
    }


};


// map

function iniciarMap() {
    var coord = {
        lat: -34.5841939,
        lng: -58.4656398
    };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: coord
    });
    var marker = new google.maps.Marker({
        position: coord,
        map: map
    });
}