function validBraces( str ) {
  // write code here
  const stack = [];
  for (let i = 0; i < str.length; i++) {
    if (str.indexOf('(') === -1 && str.indexOf(')') === -1 & str.indexOf('{') === -1 &&
    str.indexOf('{') === -1 && str.indexOf('[') === -1 && str.indexOf(']') === -1) {
      return true
    }
    a = str[i];
    if(a==='{'|| a === '[' || a === '('){
      stack.push(a)
    }else{
      if(stack.length === null){
        return false
      };
      const top = stack[stack.length - 1];
      if(top === '(' && a ===')' || top === '{' && a ==='}' || top ==='[' && a === ']'){
        stack.pop()
      }else{return false}
    }
  }

  return stack.length === 0 
}

str = '[]{{'
console.log( validBraces( str ) );