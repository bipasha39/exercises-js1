function abracaFunction(yourFunc) {
    console.log(
      "I am abracaFunction! Watch as I mutate an array of strings to your heart's content!"
    );
  
    const abracaArray = [
      "James",
      "Elamin",
      "Ismael",
      "Sanyia",
      "Chris",
      "Antigoni",
    ];
  
    const abracaOutput = yourFunc(abracaArray);
  
    return abracaOutput;
  }
  // Uppercase all the letters in an array elements
  function myFunction(arr) {
      let result = arr.map((str) => {
            return str.toUpperCase()
        }
        
        ); // new array with the result of applying toUpperCase to every element
      return result.sort();
  }
  
  let result = abracaFunction(myFunction);
  console.log(result);
  
  
  
  