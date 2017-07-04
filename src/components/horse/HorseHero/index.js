import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'utils/classnames'

import Image from 'components/image'

class HorseHero extends Component {
  render () {
    const { title, image, className, modifier } = this.props

    const modifiedClassNames = classNames('horse-hero', className, modifier)

    return (
      <div className={modifiedClassNames}>
        <div className='horse-hero__overlay'>
          <h1 className='horse-hero__title absolute-center'>
            {title}
          </h1>
        </div>
        <Image
          imageSrc={image}
          setRef={() => {}}
          className='horse-hero__image'
        />
      </div>
    )
  }
}

HorseHero.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  modifier: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ])
}

HorseHero.defaultProps = {
  className: '',
  modifier: ''
}

export default HorseHero
