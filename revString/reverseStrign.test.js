const reverseString =require('./reverseString.js');

it('Works',()=> {
  expect(reverseString('Ma tt hia s')).toBe('s aih tt aM');
})
;
test('Works-2',()=> {
  
  expect(reverseString("")).toBe('')
});

test('Doesnot work',()=> {
  expect(reverseString([])).toBe('Input must be string');

  expect(reverseString(21)).toBe('Input must be string');

  expect(reverseString({})).toBe('Input must be string');
})

