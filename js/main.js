let nome = prompt("Come ti chiami?");

let cognome = prompt("Quale è il tuo cognome?")

let colorepreferito = prompt("Colore preferito?")

let password = `${nome}${cognome}${colorepreferito}`;

document.getElementById("NewPassword").innerText = password + 2023;