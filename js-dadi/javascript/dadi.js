console.log("ciao");

//Gioco dei dadi

// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.
// Prima di partire a scrivere codice poniamoci qualche domanda: Che ci sia un array da qualche parte?
// Se dobbiamo confrontare qualcosa che "cosa" ci serve?

let numberUser = 0;
numberUser = Math.floor(Math.random() * 6 + 1);
console.log(numberUser);

let numberPc = 0;
numberPc = Math.floor(Math.random() * 6 + 1);
console.log(numberPc);

if (numberUser > numberPc) {
  console.log("Hai vinto");
} else if (numberUser < numberPc) {
  console.log("Hai perso");
} else {
  console.log("Pareggio");
}
const outputText = "Vuoi rigiocare?";
console.log(outputText);

let responseUser = prompt();
console.log(responseUser);
const verificated = responseUser =

if (responseUser === "si") {
  console.log(responseUser);
  let numberUser = 0;
  numberUser = Math.floor(Math.random() * 6 + 1);
  console.log(numberUser);

  let numberPc = 0;
  numberPc = Math.floor(Math.random() * 6 + 1);
  console.log(numberPc);

  if (numberUser > numberPc) {
    console.log("Hai vinto");
  } else if (numberUser < numberPc) {
    console.log("Hai perso");
  } else {
    console.log("Pareggio");
  }
  const outputText = "Vuoi rigiocare?";
  console.log(outputText);
  let responseUser = prompt("si/no?");
  console.log(responseUser);
} else if (responseUser === "no") {
  console.log(responseUser);
  console.log("Ok, alla prossima");
} else {
  console.log("Attendo una tua risposta");
}
