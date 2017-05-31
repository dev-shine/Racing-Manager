/*
* @name getImage
* @param {string} url - url of the image path
* @return {Promise}
* @summary Takes a url string and waits for the image to load / fail and returns a promise
*/
export const getImage = (url = '') => {
  return new Promise((resolve, reject) => {
    const img = new Image()

    img.onload = () => { resolve(img) }

    img.onerror = reject

    img.src = url
  })
}

/**
 *  @name  isInViewport
 *  @param  {Element} node
 *  @param  {Number} offset
 *  @return {Boolean}
 */
export const isInViewport = (node, offset = 0) => {
  // get element position in viewport
  const rect = node.getBoundingClientRect()

  // get viewport height and width
  const viewportHeight = (window.innerHeight || document.documentElement.clientHeight)

  const viewportWidth = (window.innerWidth || document.documentElement.clientWidth)

  // check if the element is in the viewport (or near to them)
  return (
    rect.bottom >= (0 - offset) &&
    rect.right >= (0 - offset) &&
    rect.top < (viewportHeight + offset) &&
    rect.left < (viewportWidth + offset)
  )
}
