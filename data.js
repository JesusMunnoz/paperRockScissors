const colors = require ("colors"); //obligatorio para colors

console.log('hello'.green); // outputs green text
console.log('i like cake and pies \n'.underline.red) // outputs red underlined text
console.log('inverse the color'.inverse); // inverses the color
console.log('OMG Rainbows!'.rainbow); // rainbow
console.log('Run the trap\n'.trap); // Drops the bass


let cadena = "esto es una cadena de texto";

let numero = 124;
let numera = 123;

let booleana = false;
let booleano = true; 

console.log(cadena.red);

/* number & bool are not STRING so we must to convert them to String
so the meth COLORS work*/

console.log(numero.toString().green);
console.log(numera.toString().blue);
console.log(booleana.toString().cyan);
console.log(booleano.toString().magenta);
console.log("\n");


console.log(`${numero}`.green);
console.log(`${numera}`.red);
console.log(`${booleana}`.cyan);
console.log(`${booleano}`.magenta);

console.log(Math.sqrt(9));
console.log(Math.sqrt(1369));

console.log(Math.random()*(10)); // without round
console.log(Math.round(Math.random()*(10))); // round

console.log((Math.random()*(10)).toString().blue); // without round
console.log(Math.round(Math.random()*(10)).toString().magenta); // round


let num = 4.7;
console.log(Math.floor(num).toString().green); // round to the lowest int
console.log(Math.ceil(num).toString().green); // round to the biggest int
console.log(Math.round(num).toString().green); // round to the nearest int

console.log(typeof(num));

/*---------------------------------*/

let name = "J";
let lastname = "MP";
let message = "Hi, my name is " + name + " and my lastname is " + lastname;

console.log(`${message}`.rainbow);
console.log(`Hi, my name is ${name} and my lastname is ${lastname}`.red);
console.log(message.toUpperCase().cyan);

console.log(`Hi, my name is ${name.red} and my lastname is ${lastname.blue}`);

let str = "aslkdjñlakjfgñlsdkjfñklgj";
let strr = "aslkdjñlakjfgñlsdkjfñklgj codenotch";
let cdnt = "codenotch";
let lnght =  str.length;
console.log(str.rainbow);
console.log(lnght);
console.log(str[3].green);

console.log(str.includes("codenotch"));
console.log(strr.includes("codenotch"));
console.log(cdnt.includes("codenotch"));






