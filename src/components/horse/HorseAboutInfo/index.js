import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import Separator from 'components/gui/Separator'
import TextButton from 'components/buttons/TextButton'

const HorseAboutInfo = props => {
  const { description, timeformComment } = props

  return (
    <div className='horse-about'>
      <h1 className='horse-header__medium-title'>
        About the horse
      </h1>
      <Separator modifier='white' />
      <p className='horse-header__paragraph'>
        {description}
      </p>
      <Link to='/' className='link--italic horse-header__read-more'>
        Read more...
      </Link>
      <div className='horse-header__small-title horse-header__comment-title'>
        Timeform comment
      </div>
      {timeformComment.flat && (
        <p className='horse-header__paragraph'>
          Flat: {timeformComment.flat}
        </p>
      )}
      {timeformComment.jump && (
        <p className='horse-header__paragraph'>
          Jump: {timeformComment.jump}
        </p>
      )}
      <Link to='/' className='link--italic horse-header__read-more'>
        Read more...
      </Link>
      <TextButton
        text='Syndicate page'
        className='horse-header__syndicate-button'
        modifier='md'
        onClick={() => {}}
      />
    </div>
  )
}

HorseAboutInfo.propTypes = {
  description: PropTypes.string.isRequired,
  timeformComment: PropTypes.shape({
    flat: PropTypes.string,
    jump: PropTypes.string
  })
}

HorseAboutInfo.defaultProps = {
  description: '-',
  timeformComment: {
    flat: '-',
    jump: '-'
  }
}

export default HorseAboutInfo
