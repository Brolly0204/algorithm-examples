const arr = [1,2,3,4,5,6,7]
// 替换 [3,4] => 'x'
console.log( arr.splice(2,2,'x') )
// [3, 4]
console.log( arr )
// [1, 2, "x", 5, 6, 7]

arr.splice(2,1) // 删除'x'
arr.splice(2, 0, 'y') // 在5后面添加2
console.log(arr)
// [1, 2, "y", 5, 6, 7]