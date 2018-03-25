function match(a,b){
  return (a === '[' && b === ']')
    || (a === '(' && b === ')')
}
function is_balance( str ) {
  return [...str].reduce( (stack, c) => {
    match(stack[stack.length - 1], c) ?
      stack.pop()
        : stack.push(c)
    return stack
  }, []).length === 0
}
