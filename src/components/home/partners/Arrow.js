/**
 * @module react
 */
import React from 'react'

/**
 *  @module ImageButton
 */
import ImageButton from 'components/buttons/ImageButton/ImageButton'

/**
 * Arrow component
 * @returns { React.Component }
 */
const Arrow = () => {
  return (
    <div>
      <ImageButton
        className="partners__arrow"
        imageSrc="images/arrow-left.svg"/>
    </div>
  )
}

export default Arrow
