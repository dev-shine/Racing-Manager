import React from 'react'
import moment from 'moment'

import TitleDescriptionSection from 'components/common/TitleDescriptionSection'

const dateFormatter = (date) => {
  const momentDate = moment(date)
  return momentDate.format('MMMM Do YYYY')
}

const timeFormatter = (time) => {
  const momentTime = moment(time)
  return momentTime.format('h:mma')
}

const formatKeys = {
  DATE: dateFormatter,
  TIME: timeFormatter
}

const ResultsTableContainer = (props) => {
  const {
    title,
    data,
    showDataDetails,
    firstColumns,
    commentGenerator,
    onRowClick,
  } = props

  if (!data) {
    return null
  }

  let columns = []

  if (firstColumns) {
    columns = firstColumns
  } else {
    for (let row of data) {
      for (let field in row) {
        if (!columns.includes(field)) {
          columns.push(field)
        }
      }
    }
  }

  let tbody = data.map((row, rowIndex) => {
    let cols = []
    for (let i = 0; i < columns.length; i++) {
      let fieldData = formatKeys[columns[i]] ? formatKeys[columns[i]](row[columns[i]]) : row[columns[i]]
      cols.push(<td className="table__cell">{fieldData}</td>)
    }
    return [
      <tr key={`${rowIndex}COL`} className="table__row table__row-normal" onClick={onRowClick ? () => onRowClick(row) : null}>{cols}</tr>,
      (commentGenerator && <tr key={`${rowIndex}COLCOMMENT`} className="comment-tr"><td colSpan={firstColumns.length} className="comment-td"><div className="comment-content">{commentGenerator(row)}</div></td></tr>)
    ]
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
