/**
 *  @module React, PureComponent
 */
import React, { PureComponent } from 'react'

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

/**
 *  @module Slider
 */
import Slider from 'components/input/Slider'

class FilterPanel extends PureComponent {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div className='filter-panel'>
        <div className='row'>
          <div className='filter-panel__column col-sm-6 col-md-4 col-lg-2'>
            <h5 className='uppercase filter-panel__title'>
              ownership type
            </h5>
            <Checkbox
              label='Fixed Period'
              modifier={['navy']}
              name='fixed-period' />
            <Checkbox
              label='Open Ended Period'
              modifier={['navy']}
              name='open-ended-period' />
          </div>
          <div className='filter-panel__column col-sm-6 col-md-4 col-lg-2'>
            <h5 className='uppercase filter-panel__title'>
              number of years
            </h5>
            <Counter
              min={1}
              max={50}
              defaultCount={0} />
          </div>
          <div className='filter-panel__column col-sm-6 col-md-4 col-lg-2'>
            <h5 className='uppercase filter-panel__title'>
              racing history
            </h5>
            <ToggleButton
              text='Raced'
              modifier={['fluid', 'secondary-navy-blue']}
              onClick={() => {}} />
            <ToggleButton
              text='Unraced'
              modifier={['fluid', 'secondary-navy-blue']}
              onClick={() => {}} />
          </div>
          <div className='filter-panel__column col-sm-6 col-md-4 col-lg-2'>
            <h5 className='uppercase filter-panel__title'>
              age of horse
            </h5>
            <ToggleButton
              text='0-2'
              modifier={['fluid', 'secondary-navy-blue']}
              onClick={() => {}} />
            <ToggleButton
              text='3-5'
              modifier={['fluid', 'secondary-navy-blue']}
              onClick={() => {}} />
            <ToggleButton
              text='Older Horse'
              modifier={['fluid', 'secondary-navy-blue']}
              onClick={() => {}} />
          </div>
          <div className='filter-panel__column col-sm-6 col-md-4 col-lg-2'>
            <h5 className='uppercase filter-panel__title'>
              racing type
            </h5>
            <ToggleButton
              text='National Hunt'
              modifier={['fluid', 'secondary-navy-blue']}
              onClick={() => {}} />
            <ToggleButton
              text='Flat Racing'
              modifier={['fluid', 'secondary-navy-blue']}
              onClick={() => {}} />
            <ToggleButton
              text='Dual Purpose'
              modifier={['fluid', 'secondary-navy-blue']}
              onClick={() => {}} />
          </div>
        </div>
        <div className='filter-panel__slider-container'>
         <h5 className='uppercase filter-panel__title'>
            monthly cost per %
          </h5>
         <Slider
          className='filter-panel__range-slider' />
        </div>
      </div>
    )
  }
}

/**
 *  @module FilterPanel
 */
export default FilterPanel
