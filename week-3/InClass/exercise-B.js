 
let name1  = ["Jamie","Ali","Thony"];
let name2  = ["Alexy","Amara","Annu"];
let classmate = name1.concat(name2);
console.log(classmate);

classmate.sort();
console.log(classmate);

function className(name,name1array){
    let result = name1array.includes(name);


    if(result === true){
     return `${name}  is at the class`
    }
    else{  
    return `${name}  is  not at the class`
}
}

console.log(className("Amara",classmate));

    