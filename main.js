
    // Obteniendo los elementos de los botones
const btnInicio = document.querySelector('.menu-item a[href="inicio"]');
const btnContacto = document.querySelector('.menu-item a[href="contacto"]');

// Agregando el evento click en el botón "Inicio"
btnInicio.addEventListener('click', function() {
  btnInicio.style.backgroundColor = '#637373';
});

// Agregando el evento para cambiar color en el botón "Contacto"
btnContacto.addEventListener('click', function() {
  btnContacto.style.backgroundColor = '#637373';
});


// Obteniendo el elemento del boton
const btnDescargar = document.querySelector('.btn');

// Agregar el evento para cambiar el color del botón "Descargar"
btnDescargar.addEventListener('mouseover', function() {
  btnDescargar.style.backgroundColor = '#679b9b';
});

// Agregar el evento para restaurar el color nuevamentae del botón "Descargar"
btnDescargar.addEventListener('mouseout', function() {
  btnDescargar.style.backgroundColor = '#ff9a76';
});
