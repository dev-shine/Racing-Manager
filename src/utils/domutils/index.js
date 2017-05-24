/**
*    @function
*    @return { DOMElement }
*    @param { string } id
*/
export const queryById = id => {
  return document.getElementById(id)
}

/**
 * Utility to detect if the device is a touch
 * @returns { Boolean }
 */
export const isTouchDevice = () => {
  return 'ontouchstart' in window ||
          navigator.maxTouchPoints > 0 ||
          navigator.msMaxTouchPoints > 0
}

/**
 * @name addClass
 * @description  Adds a class to passed element
 * @param { HTMLElement } element
 * @param { String } className
 */
export const addClass = (element, className) => {
  if (element && element.classList) {
    const classNames = className.split(' ')
    for (let i = 0, len = classNames.length; i < len; i++) {
      element.classList.add(classNames[i])
    }
  }
}

/**
 *  @name toggleClass
 *  @description Toggles class to passed in element
 *  @param  {HTMLElement} element
 *  @param  {String} className
 *  @return {Void}
 */
export const toggleClass = (element, className) => {
  if (element && element.classList) {
    const classNames = className.split(' ')
    for (let i = 0, len = classNames.length; i < len; i++) {
      element.classList.toggle(classNames[i])
    }
  }
}

/**
 *  @name removeClass
 *  @description Removes class to passed in element
 *  @param  {HTMLElement} element
 *  @param  {String} className
 *  @return {Void}
 */
export const removeClass = (element, className = '') => {
  if (element && element.classList) {
    const classNames = className.split(' ')
    for (let i = 0, len = classNames.length; i < len; i++) {
      element.classList.remove(classNames[i])
    }
  }
}
