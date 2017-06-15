import React from 'react'

const HorseNumericDetails = props => {
  const { data } = props

  return (
    <div className='horse-num-details'>
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

export default HorseNumericDetails
