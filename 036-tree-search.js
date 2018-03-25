function find(tree, prediction){
  return [...tree_transverse(tree)].find(prediction)
}


function find(tree, prediction){
  for (let node of tree_transverse(tree)){
    if(prediction(node)){return node}
  }
}

find(tree, node => node.v === 2)