export function overlap(rect1: DOMRect, rect2: DOMRect) {
  return !(
    rect1.top > rect2.bottom ||
    rect1.right < rect2.left ||
    rect1.bottom < rect2.top ||
    rect1.left > rect2.right
  )
}

export function isInside(rect1: DOMRect, rect2: DOMRect) {
  console.log('isInside', rect1, rect2)

  // return (
  //   ((rect2.top <= rect1.top) && (rect1.top <= rect2.bottom)) &&
  //   ((rect2.top <= rect1.bottom) && (rect1.bottom <= rect2.bottom)) &&
  //   ((rect2.left <= rect1.left) && (rect1.left <= rect2.right)) &&
  //   ((rect2.left <= rect1.right) && (rect1.right <= rect2.right))
  // );

  const isInside =
    rect1.top <= rect2.bottom &&
    rect1.bottom >= rect2.top &&
    rect1.left <= rect2.right &&
    rect1.right >= rect2.left

  return isInside
}
