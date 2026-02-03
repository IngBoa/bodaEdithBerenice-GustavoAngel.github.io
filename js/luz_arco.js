window.addEventListener("DOMContentLoaded", () => {

  const path = document.getElementById("arco");

  const length = path.getTotalLength();

  path.style.strokeDasharray = length;
  path.style.strokeDashoffset = length;

  let offset = length;

  function animar() {
    offset -= 3; // velocidad
    path.style.strokeDashoffset = offset;

    requestAnimationFrame(animar);
  }

  animar();

});
