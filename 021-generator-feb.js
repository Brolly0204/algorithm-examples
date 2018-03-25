function* fibonacci(){
  let a = 1, b = 1
  yield a
  yield b
  while(true){
    const t = b
    b = a + b
    a = t
    const x = yield b
    console.log(x)
  }
}
const it = fibonacci()
const feb10 = Array.from(Array(10), it.next, it).map(x=>x.value)
console.log(feb10)
// [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]