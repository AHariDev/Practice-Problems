// Recursive approach to reverse a String

let reverseString = (str) => {
    if (str.length < 2) {
        return str;
    } else {
        return str[str.length - 1] + reverseString(str.substring(0, str.length - 1));
    }
}; 

console.log(reverseString("papooba"));