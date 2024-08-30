function capitalize(str){
  if (!/[A-Za-z]/.test(str)){
    return "Input has to be Alphabet Only"
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
} ;
module.exports = capitalize;
