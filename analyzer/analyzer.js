export default function analyze(object){
 if (object.length === 0 ){
   return {}
 }
 let min= object[0],max = object[0];
 let length = object.length;

  object.forEach(element=>{
     max = element > max ? element : max;
     min = element < min ? element : min;
     })

  const total= object.reduce((accumulator,current)=>{
   return accumulator + current;
  },0)

  const average = total/length;
  return {
    min,
    max,
    length,
    average
  }
}

