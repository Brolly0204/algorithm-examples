

function flattenOnce(arr){
  return [].concat(...arr)
}

arr <- [1,2,3,4]

[].concat(...[1,2,3,4]) <=> [].apply(null, [1,2,3,4]) <=> [].concat(1,2,3,4)

function flatten(arr) {
  return [].concat(
    ...arr.map(x =>  
    Array.isArray(x) ? flatten(x) : x
  ))
}