import React from 'react'

import PropTypes from 'prop-types'

import CtaLink from 'components/links/CtaLink'

const TileReadMore = props => {
  const {
    href
  } = props

  return (
    <CtaLink
      href={href}
      className='tile-read-more'
      modifier='italic'
    >
      read the full story
    </CtaLink>
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
