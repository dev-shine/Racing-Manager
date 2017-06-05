import React from 'react'

/**
 *  AjaxLoader
 *  @param  {Object} props
 *  @return {React.Component}
 */
const AjaxLoader = props => {
  return (
    <div className='spinner'>
      <div className='spinner__container'>
        <div className='double-bounce1'></div>
        <div className='double-bounce2'></div>
      </div>
    </div>
  )
}

/**
 *  @module AjaxLoader
 */
export default AjaxLoader
