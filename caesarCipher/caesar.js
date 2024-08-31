export function encodeCipher(text, shift) {
  shift = shift % 26;
  if (shift < 0) {
    shift += 26; 
  }
  return text.split('').map(char => shiftCharacter(char, shift)).join('');
}

export function decodeCipher(text, shift) {
  return encodeCipher(text, -shift);
}

function shiftCharacter(char, shift) {
  const alphabetLength = 26;
  
  if (char >= 'a' && char <= 'z') {
    const base = 'a'.charCodeAt(0);
    return String.fromCharCode((char.charCodeAt(0) - base + shift) % alphabetLength + base);
  } 
  else if (char >= 'A' && char <= 'Z') {
    const base = 'A'.charCodeAt(0);
    return String.fromCharCode((char.charCodeAt(0) - base + shift) % alphabetLength + base);
  } 
  else {
    return char;
  }
}

