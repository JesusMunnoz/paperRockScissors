//const colors = require("colors"); // Obligatorio para colores

// Función para traducir números a opciones
function getChoice(num) {
  switch (num) {
    case 1: return "Rock 🏔️";
    case 2: return "Paper 📜";
    case 3: return "Scissors ✂️";
    default: return "Invalid";
  }
}

// Generar elección para usuario y PC
let user = Math.round(Math.random() * (3 - 1) + 1);
let pc = Math.round(Math.random() * (3 - 1) + 1);

console.log("Rock 🏔️ / Paper 📜 / Scissors ✂️\nGO!!");

// Determinar ganador
if (user == pc) {
    console.log("DRAW!");
} 
else if ((user == 2 && pc == 1) || (user == 3 && pc == 2) || (user == 1 && pc == 3)) {
    console.log("USER WINS!");
}
else {
    console.log("PC WINS!");
}