function* tree_transverse(tree, ord=0) {
  let transversed = false
  if(!tree.children) {
    yield tree
    return
  }
  for(let i = 0; i < tree.children.length; i++){
    if( i === ord ){
      transversed = true
      yield tree
    }
    yield *tree_transverse(tree.children[i], ord)
  }

  if(!transversed){
    yield tree
  }
}


const nodes = [...tree_transverse()]


for(let node of tree){
  // ...
}