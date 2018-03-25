

function sort(_a){
  const a = [...a]
  for(let i = 1; i < a.length; i++){
    let card = a[i] // 抓到的牌
    let j = i // j代表最终牌插入的位置
    while(j > 0 && card < a[j-1]){
      a[j] = a[j-1]
      j--
    }
    a[j] = card
  }
  return a
}

const A = [2,3,5,3]
const B = sort(A)
console.log(B)

