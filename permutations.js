function permutations(A) {
  return A.length > 1 ?
    [].concat(
      ...A.map((item, i) => permutations( A.filter( (_, j) => j !== i) )
        .map(perm => [item, ...perm]))
    ) : [A]
}


function permutations_2(A) {
  if(A.length < 2) {return [A]}

  const list = []
  for(let i = 0; i < A.length; i++) {
    const B = [...A]
    B.splice(i, 1)
    const sublist = permutations(B)
    list.push([...sublist])
  }
  return list
}

function permutations_3(A) {
  const P = []
  const indices = [...Array(A.length)].map( (_, i) => i)
  function _perm(N) {
    if(N === 1) {
      P.push(A.slice())
      return
    }
    indices.slice(0, N).forEach( i => {
      swap(A, i, N - 1)
      _perm(N - 1)
      swap(A, i, N - 1)
    })
  }
  _perm(A.length)
  return P
}