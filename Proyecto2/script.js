const carrito = document.getElementById("carrito");
const platillos = document.getElementById("lista-platillos");
const listaPlatillos = document.querySelector("#lista-carrito tbody");


cargarEventListeners();

function cargarEventListeners() {
  platillos.addEventListener("click", comprarPlatillo);
  carrito.addEventListener("click", eliminarPlatillo);
  document.addEventListener("DOMContentLoaded", leerLocalStorage);
}

function comprarPlatillo(e) {
    e.preventDefault();
    if(e.target.classList.contains('agregar-carrito')){
        const platillo = e.target.parentElement.parentElement;
        leerDatosPlatillo(platillo);
    }
}

function leerDatosPlatillo(platillo){
    const infoPlatillo = {
        imagen: platillo.querySelector('img').src,
        titulo: platillo.querySelector('h4').textContent,
        precio: platillo.querySelector('.precio span').textContent,
        id: platillo.querySelector('a').getAttribute('data-id')
    }

    insertarCarrito(infoPlatillo);
}

function insertarCarrito(platillo) {
    const row = document.createElement('tr');
    row.innerHTML = `
       <td>
           <img src="${platillo.imagen}" width=100> 
       </td> 
       <td>${platillo.titulo}</td>
       <td>${platillo.precio}</td>
       <td>
        <a href="#" class="borrar-platillo" data-id="${platillo.id}">X</a>
       </td>
    `;
    listaPlatillos.appendChild(row);
    guardarPlatilloLocalStorage(platillo);
}

function eliminarPlatillo(e) {
    e.preventDefault();

    let platillo,
        platilloId;
    
    if(e.target.classList.contains('borrar-platillo')) {
        e.target.parentElement.parentElement.remove();
        platillo = e.target.parentElement.parentElement;
        platilloId = platillo.querySelector('a').getAttribute('data-id');
    }
    eliminarPlatilloLocalStorage(platilloId)
}


function contactus(){
    ModalContactus = document.querySelector("#modal-contactanos");
    ModalContactus.className = "show_modal";
   }
   
   function closecontactus(){
    ModalContactus = document.querySelector("#modal-contactanos");
    ModalContactus.className = "closemodal";
   }
   
   
 
   