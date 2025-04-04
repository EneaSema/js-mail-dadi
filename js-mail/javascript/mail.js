// const text = "ciao";
// console.log(text);

// Mail;
// Crea una lista di email di invitati ad una festa.
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo, utilizzando un ciclo for.
// Non è consentito usare nessun metodo proprio degli array (come includes, per esempio).
// Si può fare? Certo che si basta ragionare un po’.
// Nota: Non è necessario provvedere alla validazione delle email

// RACCOLTA DATI

// Creo la lista di email attraverso un array
let listEmails = [
  // trovato = false
  "topolino@gmail.com",
  "info@paperino.com",
  "pippo@trip.long", // trovato = true
  "pluto@dog.me",
];
console.log(listEmails);

//Creo variabile per richiedere email all'utente
const requestEmail = prompt(" Inserisci la tua email, per cortesia");
console.log(requestEmail);

// SVOLGIMENTO
// // Per ogni email che mi viene fornita, vado a controllare se presente in lista,
// // comunico un messaggio adeguato in base alla presenza o no
//
let outputText = "Aspetta che controllo";
console.log(outputText);

let trovato = false;
for (let i = 0; i < listEmails.length; i++) {
  if (requestEmail === listEmails[i]) {
    trovato = true;
  }
}

if (trovato === true) {
  console.log("Benvenuto");
  alert("Benvenuto");
} else {
  console.log("Accesso Negato");
  alert("Acceso negato");
}
