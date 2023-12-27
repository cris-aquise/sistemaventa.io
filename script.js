// Obtener el formulario de inicio de sesión
const loginForm = document.getElementById('loginForm');

// Agregar un evento de envío al formulario
loginForm.addEventListener('submit', function(e) {
  e.preventDefault(); // Evitar el envío del formulario

  // Obtener los valores de usuario y contraseña ingresados
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Realizar la validación (puedes agregar tu propia lógica aquí)
  if (username === 'admin' && password === 'admin') {
    // Iniciar sesión exitosamente

    window.location.href = 'pagina_principal.html';
  } else {
    // Mostrar un mensaje de error
    alert('Usuario o contraseña incorrectos');
  }
});

// Función para cerrar sesión
function cerrarSesion() {
  alert('Estas Apunto de Finalizar tu Sesion');
  // Realizar cualquier lógica necesaria para cerrar la sesión
  // Redirigir a la página de inicio de sesión
  window.location.href = 'index.html';
}