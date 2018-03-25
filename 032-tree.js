class Tree{
  constructor(v, children){
    this.v = v
    this.children = children || null
  }
}

//    10
//   / | \
//  5  3  2
//    / \
//   7  11


const tree = new Tree(10, [
  new Tree(5),
  new Tree(3, [
    new Tree(7),
    new Tree(11)
  ]),
  new Tree(2)
])


