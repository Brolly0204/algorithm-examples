
const y = function (le) {
  return function (f) {
    return f(f)
  }(function (f) {
    return le(
      function (...x) {
        return (f(f))(...x)
      }
    )
  })
}




// const curryY = func => y(
//   g => (...myArgs) =>
//     myArgs.length >= func.length ? func(...myArgs)
//       : (...args) => g(...myArgs, ...args)
// )

// const curry = func => {
//   const g = (...allArgs) => {
//     return allArgs.length >= func.length ?
//       func(...allArgs)
//         : (...args) => g(...allArgs, ...args)
//   }
//   return g
// }

const curryY = func => y(
  g => {
    (...allArgs) => {
      allArgs.length >= func.length ?
        func(...allArgs)
        : (...args) => g(...allArgs, ...args)
)




const foo = curryY( (a,b,c,d) => {
  console.log(a,b,c,d)
} )
foo(1)(2)(3)(4)
