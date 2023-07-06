
    // Obtener los elementos de los botones
const btnInicio = document.querySelector('.menu-item a[href="inicio"]');
const btnContacto = document.querySelector('.menu-item a[href="contacto"]');

// Agregar el evento click para cambiar el color al hacer clic en el botón "Inicio"
btnInicio.addEventListener('click', function() {
  btnInicio.style.backgroundColor = '#637373';
});

// Agregar el evento click para cambiar el color al hacer clic en el botón "Contacto"
btnContacto.addEventListener('click', function() {
  btnContacto.style.backgroundColor = '#637373';
});


// Obtener el elemento del botón "Descargar"
const btnDescargar = document.querySelector('.btn');

// Agregar el evento mouseover para cambiar el color al pasar el mouse por encima del botón "Descargar"
btnDescargar.addEventListener('mouseover', function() {
  btnDescargar.style.backgroundColor = '#679b9b';
});

// Agregar el evento mouseout para restaurar el color al quitar el mouse del botón "Descargar"
btnDescargar.addEventListener('mouseout', function() {
  btnDescargar.style.backgroundColor = '#ff9a76';
});
