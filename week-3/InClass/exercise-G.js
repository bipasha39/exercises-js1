const years = [ 1964, 2008, 1999, 2005, 1978, 1985, 1919 ];
function canDrive(year) {
    const age = 2020 - year;
    if (age >= 17) {
        return true
    } else {
        return false
    }
}
const result = (`These are the birth years of people who can drive ` + years.filter(canDrive));
console.log(result);








