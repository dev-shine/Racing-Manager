import React from 'react'

import TitleDescriptionSection from 'components/common/TitleDescriptionSection'

import ResultsTable from './ResultsTable'

const ResultsTableContainer = (props) => {
  const {
    title,
    data
  } = props

  return (
    <TitleDescriptionSection
      colorModifier='blue'
      title={title}
    >
      <ResultsTable {...data} />
    </TitleDescriptionSection>
  )
}

export default ResultsTableContainer