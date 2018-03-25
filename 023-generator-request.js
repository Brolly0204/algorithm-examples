function request(url){
  return cb => {
    setTimeout(() => {
      cb(Math.random())
    }, 1000)
  }
}

function create_runner( genFunc ){
  const it = genFunc()
  function run(data){
    const itVal = it.next(data)
    if(!itVal.done){
      itVal.value(run)
    }
  }
  return run
}


create_runner( function*(){
  const val1 = yield request('some url')
  const val2 = yield request('some url')
  console.log(val1, val2)
})()