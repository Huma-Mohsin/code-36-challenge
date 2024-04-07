// Question 106: Determine if a given year is a leap year using comparison operators.
// Explain & TIP: A leap year is divisible by 4 but not by 100 unless it's also divisible by 400. This rule helps align our calendar years with the Earth's orbital period.
//------------------------------------------------------------
// A leap year is a year that contains an additional day to keep the calendar year synchronized with the astronomical or seasonal year. 
//The basic rule to determine if a year is a leap year is as follows:
// If a year is divisible by 4, it is a leap year.
// However, if the year is divisible by 100, it is not a leap year, unless:
// The year is also divisible by 400, in which case it is a leap year.
var year = 2023;
if ((year % 4 === 0) && (year % 100 !== 0 || year % 400 === 0)) {
    console.log(year + " is a leap year.");
}
else {
    console.log(year + " is not a leap year.");
} //Author-Huma Mohsin
