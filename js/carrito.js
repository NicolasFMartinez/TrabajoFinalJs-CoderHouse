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
    carrito.addEventListener("click",eliminarProducto);

    //Vaciar carrito
    vaciarCarritoBtn.addEventListener("click",() => {
        articulosCarrito=[];//reseteamos el carrito

        limpiarHtml();//eliminamos todo el html
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
function eliminarProducto(e){
    if(e.target.classList.contains("borrarProducto")){
        const productoId= e.target.getAttribute("data-id");
        //Elimina del arreglo de articuloCarrito por el data-id
        articulosCarrito=articulosCarrito.filter(producto=>producto.id!==productoId);
        carritoHtml();//itineramos el carrito y lo reflejamos en el html
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
    const existe= articulosCarrito.some(producto=>producto.id===infoProducto.id);
    if(existe){
        //Actualizamos la cantidad
        const productos=articulosCarrito.map(producto=>{
            if(producto.id===infoProducto.id){
                producto.cantidad++;
                return producto;//retorna el objeto actualizado
            }else{
                return producto;//retorna los productos no duplicados
            }
        });
        articulosCarrito=[...productos];
    }else{
        //agregamos el producto al carrito
        articulosCarrito = [...articulosCarrito, infoProducto];
        alert("Agrego al carrito " + infoProducto.titulo )
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
                   <td>${producto.titulo}</td>
                   <td>${producto.cantidad}</td>
                    <td>${producto.precio}</td>
                    <td><button class="btn btn-danger borrarProducto" data-id="${producto.id}">X</button> </td>`;

        // agrega el html en el tbody
        contenedorCarrito.appendChild(row);
    });
    //guardar el arreglo articuloscarritos
const guardarLocal=(clave,valor)=>{localStorage.setItem(clave,valor)};

guardarLocal("carrito",JSON.stringify(articulosCarrito));
}

//Eliminar los productos de tbody

function limpiarHtml() {
    while (contenedorCarrito.firstChild) {
        contenedorCarrito.removeChild(contenedorCarrito.firstChild)
    }
}

