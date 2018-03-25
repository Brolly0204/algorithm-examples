function parse_query_string(str){
  const regex = /([^&]+)=([^&]*)/g
  const matches = []
  while( (match = regex.exec(str)) && matches.push(match) ){}
  const query = {}
  matches.forEach( m => {
    query[m[1]] = decodeURIComponent(m[2])
  })
  return query
}

function parse_query_string1(str) {
  const query = {}
  str.split('&')
    .map(p => p.split('='))
    .filter(pair => typeof pair[1] !== 'undefined')
    .map(pair => [pair[0], decodeURIComponent(pair[1])])
    .forEach( pair => {
      query[pair[0]] = pair[1]
    })
  return query
}


console.log(parse_query_string1('a=1001&b=2&c=3&d=&f'))