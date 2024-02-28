let titulo = document.querySelector("#Titulo");
let boton1 = document.querySelector("#boton");
let img1 = document.querySelector("#imagen");
let opinion = document.querySelector("#opinion");

let cambiarTitulo = false;
boton1.onmouseover = function () {
  if (cambiarTitulo == false) {
    titulo.innerText =
      "La playa de noche con una luna anaranjada, y su reflejo";
    img1.src =
      "https://i.pinimg.com/564x/1a/df/f4/1adff464321349078b0067d931aed67e.jpg";
    cambiarTitulo = true;
  } else {
    titulo.innerText =
      "Atardecer en la playa, con las olas, el Sol y las Nubes";
    cambiarTitulo = false;
    img1.src =
      "https://i.pinimg.com/236x/80/3c/df/803cdfc2dd9e560c10071d2198299173.jpg";
  }
};
//esto es muy bueno
let op;
opinion.onclick = function () {
  op = prompt("Que opinas de esta pagina?");
  alert("Gracias por tu critica, puedes revisar la consola");
  console.log("Lo que el opino es que " + op);
};
