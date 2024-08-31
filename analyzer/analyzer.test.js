import analyze from './analyzer.js';

test('Basic Case',()=>{
  expect(analyze([1,2,3,4])).toStrictEqual({min : 1,max : 4,length : 4,average : 2.5});
  expect(analyze([])).toStrictEqual({});
  expect(analyze([1])).toStrictEqual({min : 1,max : 1,length : 1,average : 1});
})
