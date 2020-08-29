const names = ["Daniel", "James", "Irina", "Mozafar", "Ashleigh"];


function foundMe(arr){
    
    if(arr.includes("names")){
        return "Found me";
    }
    else{return "Havent found me";}
}



console.log(foundMe("James"));