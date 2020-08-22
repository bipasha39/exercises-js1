const nameOfStudents = ["A","B","C","D","E"];
  
function students(array){ 
        for (let i = 0; i < nameOfStudents.length; i++) {
            const nameMessage = "name is: " + nameOfStudents[i];
            const indexMessage = "index is: " + i;
            console.log(indexMessage, nameMessage);
        }
}

students(nameOfStudents);

// i= index