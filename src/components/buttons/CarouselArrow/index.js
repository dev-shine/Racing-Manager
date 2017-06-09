/**
 *  @module React
 */
import React from 'react'

/**
 *  @module classNames
 */
import classNames from 'utils/classnames'

/**
 *  @module baseClassNames
 */
import baseClassNames from 'classnames'

/**
 *  @module Icon
 */
import Icon from 'components/icon'

/**
 *  CarouselArrow
 *  @param  {String} options.className
 *  @param  {String} options.modifier
 *  @param  {Function} options.onClick
 *  @return {Component}
 */
const CarouselArrow = ({className, modifier, onClick}) => {
  // class names for the container
  const modifiedClassNames = classNames('carousel-arrow', className, modifier)

  // classnames for determining the correct arrow to show.
  const arrowClassNames = baseClassNames({
    'leftarrow': modifier === 'left',
    'rightarrow': modifier === 'right'
  })

  return (
    <div className={modifiedClassNames} onClick={onClick}>
      <Icon
        modifier={arrowClassNames}/>
    </div>
  )
}

/**
 *  @module CarouselArrow
 */
export default CarouselArrow
