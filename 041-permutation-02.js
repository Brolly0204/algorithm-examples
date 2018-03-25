function swap(p, i, j) {
  //console.log(i, j)
  t = p[i]
  p[i] = p[j]
  p[j] = t
}





function* perm(A, N){
  if(!N) {N = A.length}
  if(N === 1) { yield A.slice(); return }
  for(let i = 0; i < N; i++) {
    console.log(strpad(' ', (3-N) * 4) + 'begin', A, N)
    swap(A, i, N - 1)
    yield * perm(A, N - 1)
    swap(A, i, N - 1)
    console.log(strpad(' ', (3-N) * 4) + 'end', A, N)
  }
}

// function strpad(c, n){
//   return Array(n).fill().map(x => c).join('')
// }
// [ 1, 2, 3 ] 3
// [ 3, 2, 1 ] 2
// [ 2, 3, 1 ] 1
// [ 3, 2, 1 ] 1
// [ 1, 3, 2 ] 2
// [ 3, 1, 2 ] 1
// [ 1, 3, 2 ] 1
// [ 1, 2, 3 ] 2
// [ 2, 1, 3 ] 1
// [ 1, 2, 3 ] 1

```
begin [ 1, 2, 3 ] 3
    begin [ 3, 2, 1 ] 2
    end [ 3, 2, 1 ] 2
    begin [ 3, 2, 1 ] 2
    end [ 3, 2, 1 ] 2
end [ 1, 2, 3 ] 3
begin [ 1, 2, 3 ] 3
    begin [ 1, 3, 2 ] 2
    end [ 1, 3, 2 ] 2
    begin [ 1, 3, 2 ] 2
    end [ 1, 3, 2 ] 2
end [ 1, 2, 3 ] 3
begin [ 1, 2, 3 ] 3
    begin [ 1, 2, 3 ] 2
    end [ 1, 2, 3 ] 2
    begin [ 1, 2, 3 ] 2
    end [ 1, 2, 3 ] 2
end [ 1, 2, 3 ] 3
```