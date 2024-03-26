var eyeballs = document.getElementsByClassName("eye");

document.addEventListener("mousemove", (event) => {
  var posX = event.clientX - window.innerWidth / 2;
  var posY = event.clientY - window.innerHeight / 2;

  Array.from(eyeballs).forEach((eyeball) => {
    eyeball.style.transform =
      "translate(" + posX * 0.08 + "%, " + posY * 0.08 + "%)";
  });
});
