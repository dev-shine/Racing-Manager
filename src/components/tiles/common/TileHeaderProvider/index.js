import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'utils/classnames'

import Image from 'components/image'

const TileHeaderProvider = props => {
  const {
    className,
    modifier,
    name,
    src,
    date
  } = props

  const modifiedClassNames = classNames('tile-header-provider', className, modifier)

  return (
    <div className={modifiedClassNames}>
      <div className='tile-header-provider__image'>
        <Image source={src} alt={name} setRef={() => {}} />
      </div>
      <div className='tile-header-provider__date'>
        <p className='micro'>
          {date}
        </p>
      </div>
    </div>
  )
}

TileHeaderProvider.propTypes = {
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  modifier: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  name: PropTypes.string,
  src: PropTypes.string,
  date: PropTypes.string,
}

TileHeaderProvider.defaultProps = {
  className: '',
  modifier: '',
  name: '',
  src: '',
  date: '',
}

export default TileHeaderProvider
