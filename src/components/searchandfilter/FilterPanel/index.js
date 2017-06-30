/**
 *  @module React, Component
 */
import React, { Component } from 'react'

/**
 *  @module Checkbox
 */
import Checkbox from 'components/input/Checkbox'

/**
 *  @module ToggleButton
 */
import ToggleButton from 'components/buttons/ToggleButton'

/**
 *  @module Counter
 */
import Counter from 'components/buttons/Counter'

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
              modifier={['blue']}
              name='fixed-period'/>
            <Checkbox
              label='Open Ended Period'
              modifier={['blue']}
              name='open-ended-period'/>
          </div>
          <div className='col-sm-4 col-md-2'>
            <h5 className='uppercase filter-panel__title'>
              number of years
            </h5>
            <Counter
              min={1}
              defaultCount={0}/>
          </div>
          <div className='col-sm-4 col-md-2'>
            <h5 className='uppercase filter-panel__title'>
              racing history
            </h5>
            <ToggleButton
              text='Raced'
              modifier={['fluid', 'secondary-blue']}
              onClick={() => {}}/>
            <ToggleButton
              text='Unraced'
              modifier={['fluid', 'secondary-blue']}
              onClick={() => {}}/>
          </div>
          <div className='col-sm-4 col-md-2'>
            <h5 className='uppercase filter-panel__title'>
              age of horse
            </h5>
            <ToggleButton
              text='0-2'
              modifier={['fluid', 'secondary-blue']}
              onClick={() => {}}/>
            <ToggleButton
              text='3-5'
              modifier={['fluid', 'secondary-blue']}
              onClick={() => {}}/>
            <ToggleButton
              text='Older Horse'
              modifier={['fluid', 'secondary-blue']}
              onClick={() => {}}/>
          </div>
          <div className='col-sm-4 col-md-2'>
            <h5 className='uppercase filter-panel__title'>
              racing type
            </h5>
            <ToggleButton
              text='National Hunt'
              modifier={['fluid', 'secondary-blue']}
              onClick={() => {}}/>
            <ToggleButton
              text='Flat Racing'
              modifier={['fluid', 'secondary-blue']}
              onClick={() => {}}/>
            <ToggleButton
              text='Dual Purpose'
              modifier={['fluid', 'secondary-blue']}
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
