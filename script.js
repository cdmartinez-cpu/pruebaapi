const API_URL = "https://TU_API.onrender.com";

function encender() {
  fetch(API_URL + "/led/on");
}

function apagar() {
  fetch(API_URL + "/led/off");
}

function consultar() {
  fetch(API_URL + "/estado")
    .then(res => res.text())
    .then(data => {
      document.getElementById("estado").innerText = "Estado: " + data;

      const led = document.getElementById("led");

      if (data === "ON") {
        led.classList.add("active");
      } else {
        led.classList.remove("active");
      }
    })
    .catch(error => {
      document.getElementById("estado").innerText = "Error de conexión";
    });
}

setInterval(consultar, 2000);