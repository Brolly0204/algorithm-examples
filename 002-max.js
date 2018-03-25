const A = [1,2,3,5,6]
const max = Math.max(...A)
// 等价于 ： const max = Math.max.apply(null, A) , 早期写法
// 等价于 ： const max = Math.max(1,2,3,5,6)


// 同理
const min = Math.min(...A)