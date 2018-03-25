function febonacci(n) {
  let prev = 1
  let next = 1
  let i = 2
  while(i++ < n) {
    const t = next
    next = prev + next
    prev = t
  }
  return next
 }

 console.log(febonacci(5))