import React from 'react'

import classNames from 'utils/classnames'

import PropTypes from 'prop-types'

const FullWidthSplitSection = (props) => {
  const {
    className,
    leftComponent,
    rightComponent,
    modifier,
    children
  } = props

  const modifiedClassNames = classNames('full-width-split-section', className, modifier)

  return (
    <div className={modifiedClassNames}>
      <div className='full-width-split-section__wrapper'>
        <div className='full-width-split-section__content container no-padding'>
          <div className='full-width-split-section__left col-md-8'>
            {leftComponent}
          </div>

          <div className='full-width-split-section__right col-md-4'>
            {rightComponent}
          </div>
        </div>
        {children}
      </div>
    </div>
  )
}

FullWidthSplitSection.propTypes = {
  className: PropTypes.string,
  leftComponent: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element
  ]),
  rightComponent: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element
  ]),
  modifier: PropTypes.string
}

FullWidthSplitSection.defaultProps = {
  modifier: 'blue'
}

export default FullWidthSplitSection
