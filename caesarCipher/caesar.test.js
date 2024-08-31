import {encodeCipher,decodeCipher} from './caesar.js'; 

test('Basic Encoding', () => {
  expect(encodeCipher("hello world", 3)).toBe("khoor zruog");
});

test('Encoding with Uppercase Letters', () => {
  expect(encodeCipher("Hello World", 5)).toBe("Mjqqt Btwqi");
});

test('Encoding with Mixed Case and Punctuation', () => {
  expect(encodeCipher("Caesar Cipher, Test!", 7)).toBe("Jhlzhy Jpwoly, Alza!");
});

test('Encoding with No Shift', () => {
  expect(encodeCipher("No Shift", 0)).toBe("No Shift");
});

test('Basic Decoding', () => {
  expect(decodeCipher("khoor zruog", 3)).toBe("hello world");
});

test('Decoding with Uppercase Letters', () => {
  expect(decodeCipher("Mjqqt Btwqi", 5)).toBe("Hello World");
});

test('Decoding with Mixed Case and Punctuation', () => {
  expect(decodeCipher("Jhlzhy Jpwoly, Alza!", 7)).toBe("Caesar Cipher, Test!");
});

test('Decoding with No Shift', () => {
  expect(decodeCipher("No Shift", 0)).toBe("No Shift");
});

// Edge cases
test('Empty String', () => {
  expect(encodeCipher("", 5)).toBe("");
});

test('Single Character', () => {
  expect(encodeCipher("a", 1)).toBe("b");
});

test('All Alphabet Characters', () => {
  expect(encodeCipher("abcdefghijklmnopqrstuvwxyz", 13)).toBe("nopqrstuvwxyzabcdefghijklm");
});

test('Mixed Non-Alphabet Characters', () => {
  expect(encodeCipher("123 !@#", 4)).toBe("123 !@#");
});

test('Negative Shift Edge Case', () => {
  expect(encodeCipher("abc", -3)).toBe("xyz");
});

