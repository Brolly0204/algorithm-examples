function* tree_transverse(tree, path = []) {
  yield { tree, path }
  if(tree.children){
    for(let i = 0; i < tree.children.length; i++){
      yield * tree_transverse(tree.children[i], [...path, i])
    }
  }
}

//find_path(tree, 11)
// [1,1]

function find_path(tree, v){
  for(let result of tree_transverse(tree)){
    if(result.tree.v === v){
      return result.path
    }
  }
}

function find_by_path(tree, path){
  return path.length === 0 ? tree
    : find_by_path(tree.children[path[0]], path.slice(1))
}

// find_by_path(tree, [1,1])
// Tree {v: 11, children: null}
