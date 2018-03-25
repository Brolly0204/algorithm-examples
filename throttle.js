function throttle(func, delay = 300, I = null){
  return (...args) => {
    clearInterval(I)
    I = setTimeout(func.bind(null, ...args), delay)
    // I = setTimeout((...args) => func(...args), delay)  
  }
}


function throttle(func, delay = 60){
  let lock = false
  return (...args) => {
    if(lock){return}
    func(...args)
    lock = true
    setTimeout(() => {lock = false}, delay)
  }
}



function throttle(func, delay = 60, lock = false){
  return (...args) => {
    if(lock){return}
    func(...args)
    lock = true
    setTimeout(() => {lock = false}, delay)
  }
}

const throttle = func => delay => lock => {
  func()
  setTimeout( releaseLock, delay)
}

