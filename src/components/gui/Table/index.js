import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'utils/classnames'

const Table = props => {
  const { titles, data, className, modifier } = props

  const modifiedClassNames = classNames('table', className, modifier)

  return (
    <div className={modifiedClassNames}>
      <table className='table__el'>
        <thead className='table__head'>
          <tr className='table__row'>
            {titles.map((title, index) => (
              <td key={index} className='table__cell'>
                {title}
              </td>
            ))}
          </tr>
        </thead>
        <tbody className='table__body'>
          {data.map((row, index) => (
            <tr key={index} className='table__row'>
              {row.map((col, index) => (
                <td key={index} className='table__cell'>
                  {col}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

Table.propTypes = {
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  modifier: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  children: PropTypes.any,
}

Table.defaultProps = {
  className: '',
  modifier: '',
}

export default Table
