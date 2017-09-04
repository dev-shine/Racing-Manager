import React, { PureComponent } from 'react'

import PropTypes from 'prop-types'

import classNames from 'utils/classnames'

class FeaturedCard extends PureComponent {
  constructor (props) {
    super(props)
  }

  render () {
    const {
      className
    } = this.props

    const modifiedClassNames = classNames('featured-card', className)

    return (
      <div className={modifiedClassNames}>
      </div>
    )
  }
}

FeaturedCard.propTypes = {
  className: PropTypes.string
}

FeaturedCard.defaultProps = {

}

export default FeaturedCard
