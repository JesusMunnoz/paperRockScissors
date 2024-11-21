let user = 0
let pc = 0
let wins = 0;
let loss = 0;

/*1 = Rock / 2 = Paper / 3 = Scissors*/

console.log("Rock🏔️ / Paper📜 / Scissors✂️");
console.log("LET GET READY TO RUMBLEEEEEE!!!\n");

while ( wins < 3 && loss < 3){
    let user = Math.round(Math.random()*(3 - 1) + 1);
    let pc = Math.round(Math.random()*(3 - 1) + 1);

    if (user == pc){
        console.log("DRAW!");
    } else if ((user == 2 && pc == 1) || (user == 3 && pc == 2) || (user == 1 && pc == 3)){
        console.log("USER WINS!");
        wins++
    }else{
        console.log("PC WINS!");
        loss++
    };
}

console.log(`you win ${wins} times and you lose ${loss}`);