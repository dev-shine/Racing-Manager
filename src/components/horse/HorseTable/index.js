import React from 'react'

import TitleDescriptionSection from 'components/common/TitleDescriptionSection'

import Table from 'components/gui/Table'

const HorseTable = (props) => {
  const {
    title,
    data
  } = props

  return (
    <TitleDescriptionSection
      colorModifier='blue'
      title={title}
    >
      <Table {...data} />
    </TitleDescriptionSection>
  )
}

export default HorseTable
