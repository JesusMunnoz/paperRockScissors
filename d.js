//const colors = require ("colors"); //obligatorio para colors
//console.log(Math.round(Math.random()*(3 - 1) + 1)); // round

 let user = Math.round(Math.random()*(3 - 1) + 1);
 let pc = Math.round(Math.random()*(3 - 1) + 1);

/*1 = Rock / 2 = Paper / 3 = Scissors*/

console.log( `User says ${user}`);
console.log( `User says ${pc}\n`);
 
console.log("Rock🏔️ / Paper📜 / Scissors✂️");

console.log("LET GET READY TO RUMBLEEEEEE!!!\n");
 
if (user == pc){
    console.log("DRAW!");
 } else if ((user == 2 && pc == 1) || (user == 3 && pc == 2) || (user == 1 && pc == 3)){
    console.log("USER WINS!");
 }else{
    console.log("PC WINS!");
 };