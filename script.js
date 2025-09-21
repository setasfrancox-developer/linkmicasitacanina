// Seleccionamos todos los botones de reserva
const botonesReserva = document.querySelectorAll(".btn-reserva");

// Recorremos cada botón y le agregamos el evento click
botonesReserva.forEach(function(boton) {
  boton.addEventListener("click", function(e) {
    e.preventDefault(); // Evita que el enlace haga su acción por defecto

    // Obtenemos el servicio desde el atributo data
    const servicio = this.dataset.servicio;

    // Preguntamos al usuario si quiere incluir transporte
    const transporte = prompt("Si se desea incluir servicio de transporte, por favor indíquelo. (si/no)");

    // Construimos el mensaje base
    let mensaje = "Hola, quiero solicitar una reserva para el servicio de " + servicio;

    // Si el usuario responde "si", agregamos transporte
    if (transporte && transporte.toLowerCase() === "si") {
      mensaje += " e incluir servicio de transporte";
    }

    // Codificamos el mensaje para WhatsApp
    const mensajeCodificado = encodeURIComponent(mensaje);

    // Abrimos WhatsApp en una nueva pestaña con el mensaje
    window.open("https://wa.me/573006086132?text=" + mensajeCodificado, "_blank");
  });
});
