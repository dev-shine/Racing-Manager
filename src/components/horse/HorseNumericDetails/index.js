import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'utils/classnames'

const HorseNumericDetails = props => {
  const {
    className,
    modifier,
    data,
  } = props

  const modifiedClassNames = classNames('horse-num-details', className, modifier)

  return (
    <div className={modifiedClassNames}>
      {
        data.map((item, index) => (
          <div className='horse-num-details__item col-xs-1' key={index}>
            <div className='horse-num-details__title'>
              {item.title}
            </div>
            <div className='horse-num-details__value'>
              {item.value}
              </div>
          </div>
        ))
      }
    </div>
  )
}

PropTypes.propTypes = {
  data: PropTypes.arrayOf({
    title: PropTypes.string,
    value: PropTypes.any,
  })
}

PropTypes.defaultProps = {
  data: []
}

export default HorseNumericDetails
