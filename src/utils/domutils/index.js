/**
*    @function
*    @return { DOMElement }
*    @param { string } id
*/
export const queryById = id => {
  return document.getElementById(id)
}

/**
 *  @name queryBySelector
 *  @param  {String} selector
 *  @return {DOMElement}
 */
export const queryBySelector = selector => {
  return document.querySelector(selector)
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
 *  Will return boolean if there is any highlighted text
 *  @return {Boolean}
 */
export const getTextSelection = () => {
  if (window.getSelection) {
    return window.getSelection()
  } else
  if (document.getSelection) {
    return window.getSelection()
  } else
  if (document.selection) {
    const selection = document.selection.createRange()

    if (selection.text) {
      return selection
    }
  }
}

export const hasTextSelection = () => {
  const selection = getTextSelection()

  // If there is no selection, return false
  if (!selection) {
    return false
  }

  // Cast selection to string and then cast to boolean
  return !!(selection.toString())
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
