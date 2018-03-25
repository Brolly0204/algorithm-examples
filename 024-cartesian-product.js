function cartesian_product(...Matrix) {
  if(Matrix.length === 0) return []
  if(Matrix.length === 1) return Matrix[0]
  return Matrix.reduce((A, B) => {
    const product = []
    for(let i = 0; i < A.length; i++)
      for(let j = 0; j < B.length; j++){
        product.push ( Array.isArray(A[i]) ? [...A[i], B[j]] : [A[i], B[j]] )
      }
    return product
  })
}