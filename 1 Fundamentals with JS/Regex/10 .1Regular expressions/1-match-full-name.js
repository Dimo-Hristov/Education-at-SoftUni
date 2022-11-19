function machFullName(input){
   let regEx = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;

   let match = input.match(regEx);

   console.log(match.join(' '));

}
machFullName("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan  Ivanov");

// Write a JavaScript function to match full names from a list of names and print them on the console.

// Writing the Regular Expression

// First, write a regular expression to match a valid full name, according to these conditions:

// · A valid full name has the following characteristics:

// o It consists of two words.

// o Each word starts with a capital letter.

// o After the first letter, it only contains lowercase letters afterward.

// o Each of the two words should be at least two letters long.

// o The two words are separated by a single space.