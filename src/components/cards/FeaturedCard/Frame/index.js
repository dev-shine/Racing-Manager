import React, { PureComponent } from 'react'

import PropTypes from 'prop-types'

import classNames from 'utils/classnames'

class FeaturedCardFrame extends PureComponent {
  constructor (props) {
    super(props)
  }

  render () {
    const {
      className,
      borderColor,
      children
    } = this.props

    const modifiedClassNames = classNames('featured-card-frame', className)

    return (
      <div className={modifiedClassNames}>
        <div className='featured-card-frame__wrapper section-shadow--tile' style={{ borderColor }}>
          {children}
        </div>
      </div>
    )
  }
}

FeaturedCardFrame.propTypes = {
  className: PropTypes.string,
  borderColor: PropTypes.string
}

FeaturedCardFrame.defaultProps = {
  borderColor: '#000'
}

export default FeaturedCardFrame
