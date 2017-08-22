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
          forceShow
          setRef={() => {}}
        />
      </div>
      <h5 className='team-member__name uppercase'>
        {name}
      </h5>
      <h5 className='team-member__role uppercase'>
        {role}
      </h5>
      <p className='team-member__description tiny'>
        {description}
      </p>
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
