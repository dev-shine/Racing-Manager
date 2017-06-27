import React from 'react'
import PropTypes from 'prop-types'

import Separator from 'components/gui/Separator'

const HorseParagraphSection = props => {
  const { title, children } = props

  return (
    <div className='horse-paragraph-section'>
      <h1>
        {title}
      </h1>

      <div>
        {children}
      </div>
    </div>
  )
}

HorseParagraphSection.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.any
}

export default HorseParagraphSection
