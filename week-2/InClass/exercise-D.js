function mood(value){
    if (value === "happy") {
        return "Good job, you're doing great!";  
    }
else if (value === "sad"){
    return "Every cloud has a silver lining";
     }
else if (value === 39){
    return "Beep beep boop";
  }
else {
    return "I'm sorry, I'm still learning about feelings!"; 
}
   }
console.log(mood("happy"))
console.log(mood("sad"))
console.log(mood(39))
console.log(mood("blank"))
