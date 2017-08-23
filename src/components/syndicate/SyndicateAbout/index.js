import React from 'react'

import classNames from 'utils/classnames'

import PropTypes from 'prop-types'

import Separator from 'components/gui/Separator'

const SyndicateAbout = (props) => {
  const {
    className,
    title,
    description,
    onFaqClick
  } = props

  const modifiedClassNames = classNames('syndicate-about', className)

  return (
    <div className={modifiedClassNames}>
      <h1 className='uppercase'>
        {title}
      </h1>
      <Separator modifier='white' />
      <p className='horse-header__paragraph'>
        {description}
      </p>
      <p className='horse-header__paragraph'>
        Want to know more? See our <span className='italic inherit' onClick={onFaqClick}>FAQs</span>
      </p>
    </div>
  )
}

SyndicateAbout.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  onFaqClick: PropTypes.func
}

SyndicateAbout.defaultProps = {
  title: 'About the syndicate',
  description: ''
}

export default SyndicateAbout
