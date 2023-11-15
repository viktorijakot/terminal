// console.log("veikia");

import funkcija from "./src/module.js";
import chalk from "chalk";

// console.log(chalk.blue(funkcija()));

// console.log(process.stdout.columns);
// console.log(process.stdout.rows);

let letter = "ABCDEF    GHJIKLMNOPRS    TVWZabcdefghji    klmnoprstvqz    0987654321";
let simbols1 = [];
for (let i = 0; i < 70; i++) {
  simbols1[i] = [];
  for (let a = 0; a < 154; a++) {
    simbols1[i].push(letter.charAt(Math.floor(Math.random() * letter.length)))
    simbols1[i].push(" ");
  }
}

let count = -1;
const interval = setInterval(() => {
  count++;
    console.log(chalk.greenBright(simbols1[count].splice(',').join('')))
  if (count === 69) {
    clearInterval(interval);
  }
}, 70);


