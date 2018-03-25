
function * transverse(node) {
  yield node
  if (node.children) {
    const children = [...node.children]
    for (let i = 0; i < children.length; i++) {
      yield* transverse(children[i])
    }
  }
}


// .mv-thumb img
// [{
//   className : '.mv-thumb'
// }, {
//  tagName : 'img'
// }, {
//
// }]
//
//  [1:2] : (arr) => arr.slice(1,2)
//  [


function get_range(x){
  const m = x.match(/\[(.*)\]/)
  if(m){
    return (arr) => {
      return arr.slice(...m[1].split(':'))
    }
  }
}


function parse_selection_expr(expr){
  return expr.split(' ').map(x => {
    const range = get_range(x)
    x = x.split('[').shift()
    if(x[0] === '.'){
      return {
        className : x.substr(1),
        range
      }
    }else {
      return {
        tagName : x,
        range
      }
    }
  })
}

function is_ancestor(node1, node2){
  let p = node2
  while(p){
    if(p === node1){return true}
    p = p.parentNode
  }
  return false
}

function selector(node, path){

  if(path.length === 0) {return [node]}

  const p = path.shift()
  let nodes = []
  if(p.className) {

    nodes = [...document.getElementsByClassName(p.className)]
      .filter(v => is_ancestor(node, v))
  }
  else if(p.tagName) {
    nodes = [...transverse(node)].filter(n =>
      n.tagName === p.tagName
    )
  }
  p.range && (nodes = p.range(nodes))

  return [].concat(...nodes.map( node => selector(node, [...path])))

}

