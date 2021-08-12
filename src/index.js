const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

const SYMBOLS = {
  10: ".",
  11: "-",
  "00": "",
};

function decode(expr) {
  let string = "";
  for (let i = 0; i < expr.length; i += 10) {
    if (expr[i] === "*") {
      string += " ";
      continue;
    }

    let letter = "";

    for (let j = i; j < i + 10; j += 2) {
      letter += SYMBOLS[expr.substr(j, 2)];
    }

    string += MORSE_TABLE[letter];
  }
  return string;
}

module.exports = {
  decode,
};
