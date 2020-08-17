let a = 12;
let b = 5;

function countProcents(a,b){
    let procents = Math.round(a/(a+b)*100);
    return procents;
}
function getMessage(text, a, b) {
    let procents = countProcents(a, b);
    let message = text + procents + '%';
    return message;
  }
  let text1 = getMessage('Percentage students:', a, b);
  console.log(text1);
  let text2 = getMessage('Percentage mentors:', b, a);
  console.log(text2);