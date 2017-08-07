import React, { Component } from 'react'

import PropTypes from 'prop-types'

import classNames from 'utils/classnames'

import Image from 'components/image'

import Parallax from 'components/parallax/BaseParallax'

class HorseHero extends Component {
  render () {
    const { title, image, className, modifier } = this.props

    const modifiedClassNames = classNames('horse-hero', className, modifier)

    return (
      <div className={modifiedClassNames}>
        <Parallax
          speed={0.75}
          scope={400}>
            <div className='horse-hero__parallax-container'>
              <Image
                imageSrc={image}
                setRef={() => {}}
                className='horse-hero__image' />
            </div>
        </Parallax>
        <div className='horse-hero__overlay'>
          <h1 className='horse-hero__title absolute-center uppercase'>
            {title}
          </h1>
        </div>
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
