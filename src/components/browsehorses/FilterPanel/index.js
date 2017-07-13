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

    this.renderFilterType = this.renderFilterType.bind(this)
  }

  renderFilterType (filter, index) {
    if (filter.field === 'ownership.type') {
      return (
        <div key={index} className='filter-panel__column col-xs-12 col-sm-4 col-md-4 col-lg-2'>
          <h5 className='uppercase filter-panel__title'>
            {filter.displayName}
          </h5>
          {
            filter.values.map((value, findex) => {
              return (
                <Radio
                  key={findex}
                  label={value}
                  value={value}
                  checked={false}
                  name={filter.field}
                  id={value}
                  onChange={(event) => {}} />
              )
            })
          }
        </div>
      )
    }

    return null
  }

  render () {
    const {
      onNumberOfYearsChange,
      onRacingHistoryChange,
      onAgeChange,
      onRacingTypeChange,
      onMonthlyCostPerShareChange,
      isOpen,
      className,
      modifier,
      filterOpts
    } = this.props

    const modifiedClassNames = classNames('filter-panel', className, modifier)

    return (
      <Accordion
        isOpen={isOpen}>
        <div className={modifiedClassNames}>
          <div className='row'>
            {
              filterOpts.map((filter, index) => {
                return this.renderFilterType(filter, index)
              })
            }
            <div className='filter-panel__column col-xs-12 col-sm-4 col-md-4 col-lg-2'>
              <h5 className='uppercase filter-panel__title'>
                number of years
              </h5>
              <Counter
                min={0}
                max={3}
                defaultCount={2}
                onChange={onNumberOfYearsChange} />
            </div>
            <div className='filter-panel__column col-xs-12 col-sm-4 col-md-4 col-lg-2'>
              <h5 className='uppercase filter-panel__title'>
                racing history
              </h5>
              <ToggleButton
                active={false}
                text='Raced'
                modifier={['fluid', 'secondary-navy-blue']}
                onClick={() => {}}
                onChange={(value) => { onRacingHistoryChange('raced', value) }} />
              <ToggleButton
                active={false}
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
                active={false}
                text='0-2'
                modifier={['fluid', 'secondary-navy-blue']}
                onClick={() => {}}
                onChange={(value) => { onAgeChange('young', value) }} />
              <ToggleButton
                active={false}
                text='3-5'
                modifier={['fluid', 'secondary-navy-blue']}
                onClick={() => {}}
                onChange={(value) => { onAgeChange('adult', value) }} />
              <ToggleButton
                active={false}
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
                active={false}
                text='National Hunt'
                modifier={['fluid', 'secondary-navy-blue']}
                onClick={() => {}}
                onChange={(value) => { onRacingTypeChange('nationalHunt', value) }} />
              <ToggleButton
                active={false}
                text='Flat Racing'
                modifier={['fluid', 'secondary-navy-blue']}
                onClick={() => {}}
                onChange={(value) => { onRacingTypeChange('flatRacing', value) }} />
              <ToggleButton
                active={false}
                text='Dual Purpose'
                modifier={['fluid', 'secondary-navy-blue']}
                onClick={() => {}}
                onChange={(value) => { onRacingTypeChange('dualPurpose', value) }} />
            </div>
          </div>
          <div className='filter-panel__slider-container'>
            <div className='row'>
              <h5 className='uppercase filter-panel__title col-xs-6 text-left'>
                monthly cost per %
              </h5>
              <h4 className='uppercase filter-panel__title regular col-xs-6 text-right'>
                £0 - £500
              </h4>
            </div>
           <Slider
            onChange={onMonthlyCostPerShareChange}
            min={0}
            max={20000}
            defaultValue={[
              0,
              500
            ]}
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
