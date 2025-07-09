function aleatorio3() {
  // Genera un número aleatorio entre 1 y 3
  return Math.floor(Math.random() * 3) + 1;
}

let Ganador = false;
let contadorh = 0;
let contadorc = 0;

while (!Ganador) {
  let eleccion = prompt("Elige el número de la elección: Piedra:1, Papel:2 o Tijera:3");

  // Convertimos la entrada de string a número
  eleccion = Number(eleccion);

  // Validamos que la elección sea válida
  if (![1, 2, 3].includes(eleccion)) {
    alert("Por favor, elige un número válido: 1, 2 o 3");
    continue; // Volvemos al inicio del while
  }

  let r = aleatorio3(); // Generamos la elección de la computadora

  if (eleccion === 1 && r === 1 || eleccion === 2 && r === 2 || eleccion === 3 && r === 3  ) {
    alert("¡Empate!");
  } else if (eleccion === 1 && r === 3 || eleccion === 2 && r === 1 || eleccion === 3 && r === 2) {
    alert("¡Ganaste!");
    contadorh++;
    if (contadorh === 3) {
      Ganador = true;
      alert("¡Has ganado el juego!, a ganado el humano!");
    }
  }

else if(eleccion === 1 && r === 2 || eleccion === 2 && r === 3 || eleccion === 3 && r === 1){
    alert("¡Perdiste!");
    contadorc++;
    if (contadorc === 3) {
      Ganador = true;
      alert("¡Has ganado el juego!, a ganado la computadora!");
    }

}
}


