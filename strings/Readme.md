In JavaScript, a string is a sequence of characters used to represent text. Strings can be created using either single quotes ('), double quotes ("), or backticks (`).

String Methods:

Length: 
    string.length - returns the length of the string.

Concatenation: 
    string1 + string2 or string1.concat(string2) - combines two strings.
    
Access character: 
    string[index] - retrieves the character at a specific index.

Substring: 
    string.substring(start, end) - extracts part of the string.
   
slice:
    string.substring(start, end) - extracts part of the string.

Includes: 
    string.includes(substring) - checks if a substring exists in the string.

Replace: 
    string.replace('old', 'new') - replaces a part of the string.
 
toUpperCase: 
    convert the whole string to uppercase

toLowerCase: 
    convert the whole string to lowercase

trim:
    The trim() method in JavaScript is used to remove whitespace from both ends of a 
    string.The trim() method does not change the original string.

split() 
    method is used to split a string into an array of substrings based on a specified separator. The original string is unchanged. Here's the basic syntax:

search():
    it is used to search the string in an string it will return the index of the searched element/string return -1 if it no found, it has the power that we can use regular expression i,e console.log(str.search(/javaScript/i))

match():
    it is used to match/find the values in an string and return an array, if it dosent find then it will return null

matchAll():
    it is used to match/find the values in an string and return an itterator, if it dosent find then it will return null

startsWith():
    it is used to find whether the string start with a certain word, it will return boolean value i,e true or false

endWith():
    it is used to find whether the string end with a certain word, it will return boolean value i,e true or false  

charAt():
    these method return the charater at a specified index

charCodeAt():
    these method return the charater code i,e (ASCII) of a specified index

at():
    these method return the charater at a specified index, it also allow negative index which helps to get the string from last

indexOf()-
    indexOf these method is used to find the index of element in an array, it takes two paramaters i,e element,fromIndex. where the element is the value whose index is neded to be find and the fromIndex define array index at which to begin the search. If fromIndex is omitted, the search starts at index 0.
    it will return -1 if elementnot found

lastIndexOf()
    lastIndexOf these method is used to find the element present at the last index, it takes two paramaters i,e element,fromIndex. where the element is the value whose index is neded to be find and the fromIndex define array index at which to begin the search. If fromIndex is omitted, the search starts at index 0.
    it will return -1 if elementnot found

charCodeAt();
    these method takes character as input and return the ASCII code of a charater 

String.fromCharCode():
    these method takes ASCII code as an input and return the character of that code
