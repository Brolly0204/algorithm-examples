function swap(p, i, j) {
  t = p[i]
  p[i] = p[j]
  p[j] = t
}

function* perm(A, N){
  if(!N) {N = A.length}
  if(N === 1) { yield A.slice(); return }
  for(let i = 0; i < N; i++) {
    yield * perm(A, N - 1)
    if(N % 2 == 1)
      swap(A, i, N - 1)
    else
      swap(A, 0, N - 1)
  }
}

console.log([...perm([1,2,3])])

// [ 1, 2, 3 ]
// [ 2, 1, 3 ]
// [ 3, 2, 1 ]
// [ 2, 3, 1 ]
// [ 3, 1, 2 ]
// [ 1, 3, 2 ]