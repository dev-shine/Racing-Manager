import React from 'react'

export const multilineTextToJSX = (text) => {
  if (!text) return text
  return text.split('\n').map((part, index) => (<span key={'multilinetext_' + index}>{part}<br/></span>))
}
