$(document).ready(function() {
    $('#loginForm').submit(function(event) {
        event.preventDefault();
        
        const emp_user = $('#emp_user').val();
        const emp_clave = $('#emp_clave').val();

        var data = {
            emp_user: emp_user,
            emp_clave: emp_clave
        };

        $.ajax({
            url: 'http://localhost:8080/empleado/login',
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(data),
            success: function(response) {
                // Redirigir a la página de servicios después de inicio de sesión exitoso
                window.location.href = 'LoginLinea.html';
            },
            error: function(jqXHR, textStatus, errorThrown) {
                // Manejar la respuesta de error del backend
                alert('Error: ' + jqXHR.responseText); // Mostrar el mensaje de error devuelto por el backend
            }
        });
    });
});





