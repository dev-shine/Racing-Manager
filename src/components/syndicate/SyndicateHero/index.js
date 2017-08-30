import React from 'react'

import { constructStaticUrl } from 'utils/horseutils'

import Hero from 'components/parallax/Hero'

import Image from 'components/image'

import PropTypes from 'prop-types'

import classNames from 'utils/classnames'

const SyndicateHero = (props) => {
  const {
    featuredImage,
    logo,
    owner = { name: '' },
    className,
    modifier,
    name
  } = props

  const modifiedClassNames = classNames('syndicate-hero', className, modifier)

  return (
    <div className={modifiedClassNames}>
      <Hero featuredImage={constructStaticUrl(featuredImage)} />
      <div className='syndicate-hero__logo absolute-center'>
        <div className='syndicate-hero__logo-img'>
          {
            logo ? (
              <Image
                className='syndicate-hero__logo-element absolute-center'
                imageSrc={constructStaticUrl(logo)}
              />
            ) : (
              <h1 className='horse-header__medium-title syndicate-hero__logo-title absolute-center'>
                {name}
              </h1>
            )
          }
        </div>
        <div className='syndicate-hero__logo-desc section-shadow'>
          <h6>Racing Club</h6>
          <h6>Managed by {owner.name}</h6>
        </div>
      </div>
    </div>
  )
}

SyndicateHero.propTypes = {
  featuredImage: PropTypes.string,
  logo: PropTypes.string,
  owner: PropTypes.shape({
    name: PropTypes.string
  }),
  className: PropTypes.string,
  modifier: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  name: PropTypes.string
}

export default SyndicateHero
