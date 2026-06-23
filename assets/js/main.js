document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Previene el comportamiento por defecto del formulario

    // Aquí puedes agregar lógica para verificar usuario y contraseña
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Cambia los valores del usuario y contraseña
    if (username === 'pez payaso' && password === 'nemo') {
        window.location.href = 'Blog-inicio.html'; // Redirige a la página principal
    } else {
        alert('Usuario o contraseña incorrectos.'); // Muestra un mensaje de error
    }
});

