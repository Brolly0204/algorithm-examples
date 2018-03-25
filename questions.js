// 题目1
'aabbccddeexxxxaa'.replace(/(.)(?=\1)/g, '')


// 题目2

function maxsum(arr) {
  // M[i] 最大区间以第i位结尾
  const M = [arr[0]]
  let max = M[0]

  for(let i = 1; i < arr.length; i++){
    M[i] = Math.max(arr[i], M[i-1] + arr[i] )
    max = Math.max(M[i], max)
  }
  return max
}


// 题目3
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

