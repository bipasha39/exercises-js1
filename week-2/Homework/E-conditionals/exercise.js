/*
  Conditionals
  ---------------------------------
  Add an if statement to check Daniel's role in a CYF class.
  If Daniel is a mentor, print out "Hi, I'm Daniel, I'm a mentor."
  If Daniel is a student, print out "Hi, I'm Daniel, I'm a student."
*/

var name = "Daniel";
var danielsRole = "mentor";

function statement(role){
  if (role === "mentor"){
    return "Hi, I'm Daniel, I'm a mentor."
  }
else if(role === "student"){
  return "Hi, I'm Daniel, I'm a student."
}
}
console.log(statement(danielsRole));



/* 
EXPECTED RESULT
---------------
Hi, I'm Daniel, I'm a mentor.
*/
