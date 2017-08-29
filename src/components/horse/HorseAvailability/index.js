import React from 'react'

import TitleDescriptionSection from 'components/common/TitleDescriptionSection'

import List from 'components/gui/List'

import CtaLink from 'components/links/CtaLink'

import classNames from 'utils/classnames'

const HorseAvailability = (props) => {
  const {
    className,
    title,
    description,
    children,
    availabilityList
  } = props

  const modifiedClassNames = classNames('horse-availability', className)

  return (
    <div className={modifiedClassNames}>
      <TitleDescriptionSection
        title={title}
        titleModifier='h2'
        description={description}>
        <div>
          <List items={availabilityList} />
          {children}
          <CtaLink
            hashLink
            href='#benefits-section'
            className='link link--italic horse-availability__see-benefits'>
            See benefits
          </CtaLink>
        </div>
      </TitleDescriptionSection>
    </div>
  )
}

export default HorseAvailability
