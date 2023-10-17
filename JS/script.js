// Raccolta di dati
const username = (prompt("Scrivi il tuo nome"));
console.log(username, typeof username);
const surname = (prompt("Scrivi il tuo cognome"));
console.log(surname, typeof surname);
const favouriteColour = (prompt("Scrivi il tuo colore preferito"));
console.log(favouriteColour, typeof favouriteColour);
const number = 21;
console.log(number, typeof number);

// Logica del programma
const message = `${username + surname + favouriteColour + number}`;
console.log(message);

// Output
document.getElementById("result").innerHTML = message;