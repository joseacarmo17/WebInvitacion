// Pendiente de conectar el formulario con el destino de las respuestas.
document.getElementById("rsvp-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const status = document.getElementById("rsvp-status");
  status.textContent = "El envío todavía no está disponible. Tus datos no se han enviado.";
  status.hidden = false;
});
