/**
 *  [isEmptyObject Check if an object is empty]
 *  @param  {Object} obj
 *  @return {Boolean}
 */
const isEmptyObject = obj => {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      return false
    }
  }
  return true
}

export default isEmptyObject
