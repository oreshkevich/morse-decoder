const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
   const re = /\B(?=(\d{10})+(?!\d))/g;
  const animal = expr.toString().replace(re, ',');
  const ddd = animal.replace(/10/g, '.');
  const nnn = ddd.replace(/11/g, '-');
  const letter = nnn.replace(/0/g, '');
  const mew = letter.replace(/,/g, ' ');
  const cat = mew.replace(/\*\*\*\*\*\*\*\*\*\*/g, '  ');
  let words = (cat).split('  ');
  let letters = words.map((w) => w.split(' '));
  let decoded = [];
  for(let i = 0; i < letters.length; i++){
    decoded[i] = [];
    for(let x = 0; x < letters[i].length; x++){
        if(MORSE_TABLE[letters[i][x]]){
            decoded[i].push( MORSE_TABLE[letters[i][x]] );
        }
    }
  }
  return decoded.map(arr => arr.join('')).join(' ');
}

module.exports = {
    decode
}
