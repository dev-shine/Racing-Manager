import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'utils/classnames'

import { Link } from 'react-router-dom'

const TileReadMore = props => {
  const {
    className,
    modifier,
    href,
  } = props

  const modifiedClassNames = classNames('tile-read-more', className, modifier)

  return (
     <Link to={href} className={modifiedClassNames}>
       read the full story
     </Link>
  )
}

TileReadMore.propTypes = {
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  modifier: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  href: PropTypes.string
}

TileReadMore.defaultProps = {
  className: '',
  modifier: '',
  href: '/'
}

export default TileReadMore
