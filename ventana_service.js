$(document).ready(function() {
    // Manejar clic en el botón de Cerrar Sesión
    $('#logoutButton').click(function() {
        // Redirigir al usuario a la página de inicio de sesión
        window.location.href = "Login.html";
    });

    // Otros scripts para manejar funcionalidades adicionales si es necesario
    
    // Eventos para los botones de servicios
    $('#getDoctors').click(function() {
        window.location.href = "http://localhost:8080/Doctor/0010";
    });
    $('#registerAppointment').click(function() {
        window.location.href = "http://localhost:8080/Citas/registrar";
    });
    $('#registerPatient').click(function() {
        window.location.href = "http://localhost:8080/Paciente/registrar";
    });
    $('#makePayment').click(function() {
        window.location.href = "http://localhost:8080/Pago/realizar";
    });
    $('#rescheduleAppointment').click(function() {
        window.location.href = "http://localhost:8080/Citas/reprogramar";
    });
});
