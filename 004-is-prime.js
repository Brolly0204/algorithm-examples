
function is_prime(n) {
  if (n <= 1) {return false}
  const N = Math.floor(Math.sqrt(n))
  let is_prime = true 
  for(let i = 2; i <= N; i++) {
    if( n % i === 0) {
      is_prime = false 
      break
    }
  }
  return is_prime
}


function *sieve_primes (n){
  let numbers = Array.from({length : n-2}, (_, i) => i+2) // N

  let p = null
  while( (p = numbers.shift()) ) {
    yield p
    numbers = numbers.filter( t => t % p !== 0)
  }
}

