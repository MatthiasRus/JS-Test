const capitalize = require("./capitalize.js");

it('working',() => {expect(capitalize('asmmamaw')).toBe("Asmmamaw")});
test('Not working',()=> {
  expect(capitalize('')).toBe("Input has to be Alphabet Only")
});
test('Not working',()=> {
  expect(capitalize('12')).toBe("Input has to be Alphabet Only")
})
it('working',() => {expect(capitalize('asmma233')).toBe("Asmma233")});

