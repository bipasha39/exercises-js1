function exponential(number) {
  return number * number;
}

 function isEven(number) {
return number % 2 === 0;
 }
 let count= 6;
while (count < 20){
  if (isEven(count)){
  console.log(exponential(count));}
  count +=1;
}