function tree_transverse(tree, callback, ord=0) {
  let transversed = false
  if(!tree.children) {
    callback(tree.v)
    return
  }
  tree.children.forEach( (child, i) => {
    if( i === ord ){
      transversed = true
      callback(tree.v)
    }
    tree_transverse(child, callback, ord)
  })
  !transversed && callback(tree.v)
}

// 先序遍历
tree_transverse(tree, (node) => console.log(node.v) )

// 中序遍历
tree_transverse(tree, (node) => console.log(node.v) , 1)
tree_transverse(tree, (node) => console.log(node.v) , 2)
// 后序遍历
tree_transverse(tree, (node) => console.log(node.v) , 3)
tree_transverse(tree, (node) => console.log(node.v) , 4)
