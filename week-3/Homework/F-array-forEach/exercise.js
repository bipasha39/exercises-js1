/* 
  Using .forEach() print the numbers 1 to 15, with some exceptions:
  - For multiples of 3 print “Fizz” instead of the number 
  - For the multiples of 5 print “Buzz”. 
  - For numbers which are multiples of both 3 and 5 print “FizzBuzz”

  An array with numbers 1-15 has been provided.
*/

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];




arr.forEach((i, n) => {
  let result = "";
  if (i % 15 == 0)
    result += "FizzBuzz";
  else if (i % 5 == 0)
    result += "Buzz";
  else if (i % 3 == 0)
    result += "Fizz";
  else
    result += i;
  return arr[n] = result;
});
console.log(arr);



// const outPut = (arr) => {
// 	arr.forEach((num, idx) => {
// 		if (arr[idx] % 3 === 0 && arr[idx] % 5 === 0) {
// 			arr[idx] = 'FizzBuzz';
// 		} else if (arr[idx] % 5 === 0) {
// 			arr[idx] = 'Buzz';
// 		} else if (arr[idx] % 3 === 0) {
// 			arr[idx] = 'Fizz';
// 		}
// 	});
// 	return arr;
// };

// console.log(outPut(arr));

/* EXPECTED OUTPUT */

/*
1
2
'Fizz'
4
'Buzz'
'Fizz'
7
8
'Fizz'
'Buzz'
11
'Fizz'
13
14
'FizzBuzz'
*/
