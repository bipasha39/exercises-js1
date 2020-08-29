
      function canDrive(birthYear) {
        const age = 2020 - birthYear;
        if (age >= 17) {
            return `Born in ${birthYear} can drive`;
        } else {
            const pendingYears = 17 - age;
            return `Born in ${birthYear} can drive in ${pendingYears} years`;
        }
    }
    // canDrive(1964)
    // canDrive(2008)
    // canDrive(1999)
    const years = [ 1964, 2008, 1999, 2005, 1978, 1985, 1919 ];
    const result = years.map(canDrive);
    console.log(result);
   
    
    
    
    