// 指数级
function fibonacci(n){
  return n == 1 || n== 2 ? 1 :
      fibonacci(n - 1) + fibonacci(n-2)
}

// 线性
function fibonacci(n){
  return Array(n).fill()
    .reduce( ([a,b], _) => {
      return [b, a+b]
    }, [0, 1])[1]
}
//
// function fibonacci(n){
//   let [a,b] = [0, 1]
//   for(let i = 0; i < n; i++){
//     [a, b] = [b, a+b]
//   }
//   return b
// }
console.log( fibonacci(100) )
// console.log('total : ', c)