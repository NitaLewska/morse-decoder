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

const MORSE_TABLE_encoded = {
};

for (const [key, value] of Object.entries(MORSE_TABLE)) {
    let new_key = []
    key.split('').map((a) => {a === '.' ? new_key.push(10) : new_key.push(11)});
    new_key = new_key.join('').padStart(10, '0');
    MORSE_TABLE_encoded[new_key] = value;
  }

  MORSE_TABLE_encoded['**********'] = ' '

function decode(expr) {
    expr = expr.match(/.{1,10}/g) || []
    let output = []
    expr.map((a) => {
        output.push(MORSE_TABLE_encoded[a])
    })
    return output.join('')
}

module.exports = {
    decode
}