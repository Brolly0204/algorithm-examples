class Tree{
  constructor(v, children){
    this.v = v
    this.children = children || null
  }
}

//     10
//   /  | \
//  5   3  2
//    / | \
//   7  11 1


const tree = new Tree(10, [
  new Tree(5),
  new Tree(3, [
    new Tree(7),
    new Tree(11),
    new Tree(1)
  ]),
  new Tree(2)
])




// select([1, '*[>5]') => [7, 11]

// 1/*[>5]

[
  {child : 1},
  {op : (x) => x.v > 5}
]

function* tree_transverse(node, path = []) {
  yield { node, path }
  if(node.children){
    for(let i = 0; i < node.children.length; i++){
      yield * tree_transverse(node.children[i], [...path, i])
    }
  }
}



function select(node, path){
  if(path.length === 0){ return [node]}
  const p = path.shift()
  if(p.child){
    return select(node.children[p.child], [...path])
  } else if(p.op) {
    return [...tree_transverse(node)]
      .filter(_n => p.op(_n.node))
      .map( n => n.node)
  }
}

function parse_selection_exp(expr){
  return expr.split(' ')
    .map(p => {
      if(p.match(/^\d+$/)){
        return {child : parseInt(p)}
      } else {
        return {
          op : eval( `(x) => x.v ${p.replace(/[\[\]]/g, '')}`)
        }
      }
    })
}

// parse_selection_exp('1 [>5]')
function select_easy(tree, expr){
  return select(tree, parse_selection_exp(expr))
}

// select_easy(tree, '1 [>5]')

select(tree, [
  {child : 1},
  {op : x => x.v > 5}
])