// const names = ["Daniel", "James", "Irina", "Mozafar", "Ashleigh"];


// function foundMe(arr){
    
//     if(arr.includes("names")){
//         return "Found me";
//     }
//     else{return "Havent found me";}
// }



// console.log(foundMe("James"));

function findName(names) {
    const myNameIsIncluded = names.find(
        (elem) => { return "Alexandra" === elem }
    );
    if (myNameIsIncluded) {
        return "Found me";
    } else {
        return "Not found me :(";
    }
}
const namesArr = ["David", "Ana", "Alexandra"];
console.log(findName(namesArr));




