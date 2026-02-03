const path = document.getElementById("corazon");
const iniciales = document.querySelector(".iniciales");

const length = path.getTotalLength();

path.style.strokeDasharray = length;
path.style.strokeDashoffset = length;

let offset = length;
let latidoIniciado = false;

function animar() {

  offset -= 1.5;
  path.style.strokeDashoffset = offset;

  const progreso = 1 - (offset / length);

  // Reveal iniciales
  iniciales.style.opacity = Math.min(progreso * 2, 1);

  // Cuando termina el corazón → latido
  if (progreso >= 1 && !latidoIniciado) {
    latidoIniciado = true;
    iniciales.classList.add("latido");
  }

  requestAnimationFrame(animar);
}

animar();
