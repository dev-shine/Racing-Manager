/**
 *  @module React, Component
 */
import React, { Component } from 'react'

/**
 *  @module Checkbox
 */
import Checkbox from 'components/input/Checkbox'

/**
 *  @module TextButton
 */
import TextButton from 'components/buttons/TextButton'

class FilterPanel extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div className='filter-panel'>
        <div className='row'>
          <div className='col-sm-4 col-md-2'>
            <h5 className='uppercase filter-panel__title'>
              ownership type
            </h5>
            <Checkbox
              label='Fixed Period'
              name='fixed-period'/>
            <Checkbox
              label='Open Ended Period'
              name='open-ended-period'/>
          </div>
          <div className='col-sm-4 col-md-2'>
            <h5 className='uppercase filter-panel__title'>
              number of years
            </h5>
          </div>
          <div className='col-sm-4 col-md-2'>
            <h5 className='uppercase filter-panel__title'>
              racing history
            </h5>
            <TextButton
              text='Raced'
              modifier={['fluid', 'secondary']}
              onClick={() => {}}/>
            <TextButton
              text='Unraced'
              modifier={['fluid', 'secondary']}
              onClick={() => {}}/>
          </div>
          <div className='col-sm-4 col-md-2'>
            <h5 className='uppercase filter-panel__title'>
              age of horse
            </h5>
            <TextButton
              text='0-2'
              modifier={['fluid', 'secondary']}
              onClick={() => {}}/>
            <TextButton
              text='3-5'
              modifier={['fluid', 'secondary']}
              onClick={() => {}}/>
            <TextButton
              text='Older Horse'
              modifier={['fluid', 'secondary']}
              onClick={() => {}}/>
          </div>
          <div className='col-sm-4 col-md-2'>
            <h5 className='uppercase filter-panel__title'>
              racing type
            </h5>
            <TextButton
              text='National Hunt'
              modifier={['fluid', 'secondary']}
              onClick={() => {}}/>
            <TextButton
              text='Flat Racing'
              modifier={['fluid', 'secondary']}
              onClick={() => {}}/>
            <TextButton
              text='Dual Purpose'
              modifier={['fluid', 'secondary']}
              onClick={() => {}}/>
          </div>
        </div>
      </div>
    )
  }
}

/**
 *  @module FilterPanel
 */
export default FilterPanel
