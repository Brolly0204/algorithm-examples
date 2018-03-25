
function get_layout(ele){
  const layout = {
    width : ele.offsetWidth,
    height : ele.offsetHeight,
    left : ele.offsetLeft,
    top : ele.offsetTop
  }
  if(ele.offsetParent){
    const parentLayout = get_layout(ele.offsetParent)
    layout.left += parentLayout.left
    layout.top += parentLayout.top
  }
  return layout
}

function get_layout(ele){
  let left = ele.offsetLeft, top = ele.offsetTop
  let p = ele.offsetParent
  while(p){
    left += p.offsetLeft
    top += p.offsetTop
    p = p.offsetParent
  }
  return {
    width : ele.offsetWidth,
    height : ele.offsetHeight,
    left : left,
    top : top
  }
}