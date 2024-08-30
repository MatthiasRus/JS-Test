function reverseString(str){
  if (typeof str !== 'string'){
    return ('Input must be string')
  } 
  let revString = '';
  for (let i = str.length-1;i>=0;i--){
    revString += str.charAt(i);
  }
  return revString;
}

module.exports = reverseString;

