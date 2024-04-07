// Question 108: Compare two strings to check if they are identical, ignoring case sensitivity.
// Explain & TIP: To compare strings without considering their case (uppercase/lowercase), you can convert both strings to the same case before comparing.
//in a case-sensitive system:
// "Hello" and "hello" are treated as different strings.
// "Apple" and "apple" are treated as different strings.
// In a case-insensitive system:
// "Hello" and "hello" are considered the same string.
// "Apple" and "apple" are considered the same string.
var string1 = "Hello";
var string2 = "hello"; //ignoring case sensitive.
if (string1.toLowerCase() == string2.toLowerCase()) {
    console.log(string1.toLowerCase() + " and " + string2.toLowerCase(), " are identical,ignoring casesensitive ");
}
else {
    console.log(string1 + " and " + string2, " are not identical ");
} //Author-Huma Mohsin
