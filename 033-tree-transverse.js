function tree_transverse(tree){
  console.log(tree.v)
  tree.children && tree.children.forEach(tree_transverse)
}

function tree_transverse_l(tree) {
  tree.children && tree.children.forEach(tree_transverse_l)
  console.log(tree.v)
}

function tree_transverse_m(tree, ord = 0) {
  let transversed = false
  if(!tree.children) {
    console.log(tree.v)
    return
  }
  tree.children.forEach( (child, i) => {
    if( i === ord ){
      transversed = true
      console.log(tree.v)
    }
    tree_transverse_m(child, ord)
  })
  !transversed && console.log(tree.v)
}

tree_transverse_m(tree, 0)
// 10 5 3 7 11 2
tree_transverse_m(tree, 3)
// 5 7 11 3 2 10
tree_transverse_m(tree, 1)
// 5 10 7 3 11 2






