import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'utils/classnames'

import Image from 'components/image'

const HorseTeamMember = props => {
  const { image, name, role, description, className, modifier } = props

  const modifiedClassNames = classNames('team-member', className, modifier)

  return (
    <div className={modifiedClassNames}>
      <div className='team-member__image-wrapper'>
        <Image
          className='team-member__image'
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
  description: PropTypes.string,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  modifier: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ])
}

export default HorseTeamMember
