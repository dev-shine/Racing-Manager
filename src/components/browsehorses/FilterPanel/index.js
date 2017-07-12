/**
 *  @module React, PureComponent
 */
import React, { PureComponent } from 'react'

/**
 *  @module PropTypes
 */
import PropTypes from 'prop-types'

/**
 *  @module Radio
 */
import Radio from 'components/input/Radio'

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

/**
 *  @module classNames
 */
import classNames from 'utils/classnames'

/**
 *  @module Accordion
 */
import Accordion from 'components/accordion/BaseAccordion'

class FilterPanel extends PureComponent {
  constructor (props) {
    super(props)
  }

  render () {
    const {
      filterOpts,
      onOwnerShipChange,
      onNumberOfYearsChange,
      onRacingHistoryChange,
      onAgeChange,
      onRacingTypeChange,
      onMonthlyCostPerShareChange,
      isOpen,
      className,
      modifier
    } = this.props

    const modifiedClassNames = classNames('filter-panel', className, modifier)

    return (
      <Accordion
        isOpen={isOpen}>
        <div className={modifiedClassNames}>
          <div className='row'>
            <div className='filter-panel__column col-xs-12 col-sm-4 col-md-4 col-lg-2'>
              <h5 className='uppercase filter-panel__title'>
                ownership type
              </h5>
              <Radio
                label='Fixed Period'
                value='fixed-period'
                checked={filterOpts.ownershipType.value === 'fixed period'}
                name='ownershiptype'
                id='fixed-period'
                onChange={(event) => { onOwnerShipChange('fixedPeriod', event) }} />
              <Radio
                label='Open Ended Period'
                value='Open Ended Period'
                checked={filterOpts.ownershipType.value === 'open Ended Period'}
                name='ownershiptype'
                id='open-ended-period'
                onChange={(event) => { onOwnerShipChange('openEndedPeriod', event) }} />
            </div>
            <div className='filter-panel__column col-xs-12 col-sm-4 col-md-4 col-lg-2'>
              <h5 className='uppercase filter-panel__title'>
                number of years
              </h5>
              <Counter
                min={filterOpts.numberOfYears.min}
                max={filterOpts.numberOfYears.max}
                defaultCount={filterOpts.numberOfYears.value}
                onChange={onNumberOfYearsChange} />
            </div>
            <div className='filter-panel__column col-xs-12 col-sm-4 col-md-4 col-lg-2'>
              <h5 className='uppercase filter-panel__title'>
                racing history
              </h5>
              <ToggleButton
                active={filterOpts.racingHistory.raced}
                text='Raced'
                modifier={['fluid', 'secondary-navy-blue']}
                onClick={() => {}}
                onChange={(value) => { onRacingHistoryChange('raced', value) }} />
              <ToggleButton
                active={filterOpts.racingHistory.unraced}
                text='Unraced'
                modifier={['fluid', 'secondary-navy-blue']}
                onChange={(value) => { onRacingHistoryChange('unraced', value) }}
                onClick={() => {}} />
            </div>
            <div className='filter-panel__column col-xs-12 col-sm-4 col-md-4 col-lg-2'>
              <h5 className='uppercase filter-panel__title'>
                age of horse
              </h5>
              <ToggleButton
                active={filterOpts.age.young}
                text='0-2'
                modifier={['fluid', 'secondary-navy-blue']}
                onClick={() => {}}
                onChange={(value) => { onAgeChange('young', value) }} />
              <ToggleButton
                active={filterOpts.age.adult}
                text='3-5'
                modifier={['fluid', 'secondary-navy-blue']}
                onClick={() => {}}
                onChange={(value) => { onAgeChange('adult', value) }} />
              <ToggleButton
                active={filterOpts.age.old}
                text='Older Horse'
                modifier={['fluid', 'secondary-navy-blue']}
                onClick={() => {}}
                onChange={(value) => { onAgeChange('old', value) }} />
            </div>
            <div className='filter-panel__column col-xs-12 col-sm-4 col-md-4 col-lg-2'>
              <h5 className='uppercase filter-panel__title'>
                racing type
              </h5>
              <ToggleButton
                active={filterOpts.racingType.nationalHunt}
                text='National Hunt'
                modifier={['fluid', 'secondary-navy-blue']}
                onClick={() => {}}
                onChange={(value) => { onRacingTypeChange('nationalHunt', value) }} />
              <ToggleButton
                active={filterOpts.racingType.flatRacing}
                text='Flat Racing'
                modifier={['fluid', 'secondary-navy-blue']}
                onClick={() => {}}
                onChange={(value) => { onRacingTypeChange('flatRacing', value) }} />
              <ToggleButton
                active={filterOpts.racingType.dualPurpose}
                text='Dual Purpose'
                modifier={['fluid', 'secondary-navy-blue']}
                onClick={() => {}}
                onChange={(value) => { onRacingTypeChange('dualPurpose', value) }} />
            </div>
          </div>
          <div className='filter-panel__slider-container'>
           <h5 className='uppercase filter-panel__title'>
              monthly cost per %
            </h5>
           <Slider
            onChange={onMonthlyCostPerShareChange}
            min={filterOpts.monthlyCostPerShare.min}
            max={filterOpts.monthlyCostPerShare.max}
            defaultValue={filterOpts.monthlyCostPerShare.value}
            className='filter-panel__range-slider' />
          </div>
        </div>
      </Accordion>
    )
  }
}

FilterPanel.propTypes = {
  isOpen: PropTypes.bool,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.object
  ]),
  modifier: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.object
  ])
}

/**
 *  @module FilterPanel
 */
export default FilterPanel
