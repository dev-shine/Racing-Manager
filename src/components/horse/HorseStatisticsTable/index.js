import React from 'react'

import TitleDescriptionSection from 'components/common/TitleDescriptionSection'

const ResultsTableContainer = (props) => {
  const {
    title,
    data,
    showDataDetails
  } = props

  if (!data) {
    return null
  }

  let columns = []

  for (let row of data) {
    for (let field in row) {
      if (!columns.includes(field)) {
        columns.push(field)
      }
    }
  }

  let tbody = data.map((row, rowIndex) => {
    let cols = []
    for (let i = 0; i < columns.length; i++) {
      cols.push(<td>{row[columns[i]]}</td>)
    }
    return (
      <tr key={`${rowIndex}COL`}>{cols}</tr>
    )
  })

  return (
    <TitleDescriptionSection
      colorModifier='blue'
      title={title}>
      <div className='table'>
        <table className='table__el'>
          <thead className='table__head'>
            <tr className='table__row'>
              {columns.map((column, colIndex) => (
                <th key={`${colIndex}COL`}>{column}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tbody}
          </tbody>
        </table>
      </div>
    </TitleDescriptionSection>
  )
}

export default ResultsTableContainer
