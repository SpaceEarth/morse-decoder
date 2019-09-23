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
    '*****':  ' '
};

const LETTER_LENGTH = 10;

function alphabetEncoder(value) {
    switch (value) {
        case '11': return '-';
        case '10': return '.';
        case '**': return '*';
    }
    return '';
}

function decode(expr) {
    return [...expr].reduce(({decoded, stack, currentIndx}, value, indx) => {
        if (indx % LETTER_LENGTH === 0) {
            decoded.push([]);
        }

        if (stack.push(value) === 2) {
            decoded[currentIndx].push(alphabetEncoder(stack.join('')));
            stack.length = 0;
        }

        if (indx % LETTER_LENGTH === LETTER_LENGTH - 1) {
            decoded[currentIndx] = MORSE_TABLE[decoded[currentIndx].join('')];
            currentIndx += 1;
        }

        return {decoded, stack, currentIndx};
    }, {
        decoded: [],
        stack: [],
        currentIndx: 0
    }).decoded.join('');
}

module.exports = {
    decode
}