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
