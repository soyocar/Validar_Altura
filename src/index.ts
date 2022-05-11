import "./styles.css";

let btnEnv = document.getElementById("enviar");
let altura: number = document.getElementById("dato");
let alturapermitida: number = 1.3;

btnEnv.addEventListener("click", () => {
  let alturaper: number = Number(altura.value);
  if (alturaper <= alturapermitida) {
    console.log("La persona no puede subir al juego");
  } else {
    console.log("La persona puede subir al juego");
  }

  //}
});
