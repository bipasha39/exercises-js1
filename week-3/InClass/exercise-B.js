 
let name1  = ["Jamie","Ali","Thony"];
let name2  = ["Alexy","Amara","Annu"];
let classmate = name1.concat(name2);
console.log(classmate);

name1.sort();
console.log(name1);

function className(name,name1array){
    let resut = name1.includes(name);


    if(result === true){
     return `${name}  is at the class`
    }
    else{  
    return `${name}  is  not at the class`
}
}
console.log(className("Amara",name1array));

    