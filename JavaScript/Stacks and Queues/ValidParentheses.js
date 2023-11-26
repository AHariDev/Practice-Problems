/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if (s.length === 0 || s.length === 1 || s.length % 2){
        return false; 
    }

    let parenthesesStack = []; 

    let braceCount = 0; 

    for(let i=0; i<s.length; i++){
        if(s[i] === '(' || s[i] === '{' || s[i] === '['){
            parenthesesStack.push(s[i]); 
        }
        else {
            if (s[i] === ')'){
                if (parenthesesStack.pop() === '('){
                    braceCount++; 
                }
            } else if (s[i] === '}'){
                if (parenthesesStack.pop() === '{'){
                    braceCount++; 
                }
            } else {
                if (parenthesesStack.pop() === '['){
                    braceCount++; 
                }
            }
        }
    }

    return braceCount === s.length/2; 
};