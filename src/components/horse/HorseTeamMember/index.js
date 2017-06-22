import React from 'react'
import PropTypes from 'prop-types'

import Image from 'components/image'

const HorseTeamMember = props => {
  const { image, name, role, description } = props

  return (
    <div className='team-member'>
      <div className='team-member__image'>
        <Image
          className=''
          imageSrc={image}
          setRef={() => {}}
        />
      </div>
      <div className='team-member__name'>
        {name}
      </div>
      <div className='team-member__role'>
        {role}
      </div>
      <div className='team-member__description'>
        {description}
      </div>
    </div>
  )
}

HorseTeamMember.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  description: PropTypes.string
}

export default HorseTeamMember
