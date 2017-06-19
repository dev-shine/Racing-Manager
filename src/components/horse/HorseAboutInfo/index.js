import React from 'react'
import PropTypes from 'prop-types'

import Separator from 'components/gui/Separator'

// import { Link } from 'react-router-dom'
// import TextButton from 'components/buttons/TextButton'

const HorseAboutInfo = props => {
  const { data } = props
  const { description, timeformComments = {} } = data

  return (
    <div className='horse-about'>
      <h1 className='horse-header__medium-title'>
        About the horse
      </h1>
      <Separator modifier='white' />
      <div>
        <p className='horse-header__paragraph'>
          {description || 'No description ...'}
        </p>
      </div>
      <div className='horse-header__small-title horse-header__comment-title'>
        Timeform comment
      </div>
      {(!timeformComments.flat && !timeformComments.jump) && (
        <p className='horse-header__paragraph'>
          No timeform comments..
        </p>
      )}
      {timeformComments.flat && (
        <p className='horse-header__paragraph'>
          Flat: {timeformComments.flat}
        </p>
      )}
      {timeformComments.jump && (
        <p className='horse-header__paragraph'>
          Jump: {timeformComments.jump}
        </p>
      )}
    </div>
  )
}

HorseAboutInfo.propTypes = {
  data: PropTypes.shape({
    description: PropTypes.string,
    timeformComments: PropTypes.shape({
      flat: PropTypes.string,
      jump: PropTypes.string
    })
  })
}

HorseAboutInfo.defaultProps = {
  data: {}
}

export default HorseAboutInfo

/*
<Link to='/' className='link--italic horse-header__read-more'>
  Read more...
</Link>

<Link to='/' className='link--italic horse-header__read-more'>
  Read more...
</Link>
<TextButton
  text='Syndicate page'
  className='horse-header__syndicate-button'
  modifier='md'
  onClick={() => {}}
/>
*/
