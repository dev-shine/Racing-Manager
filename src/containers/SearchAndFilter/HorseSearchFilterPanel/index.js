import React, { Component } from 'react'

import { connect } from 'react-redux'

import {
  Panel as FilterPanel,
  Header,
  Column
} from 'components/searchandfilter/FilterPanel'

/**
 *  @module Radio
 */
import Radio from 'components/input/Radio'

/**
 *  @module Counter
 */
import Counter from 'components/buttons/Counter'

/**
 *  @module Slider
 */
import Slider from 'components/input/Slider'

import TextButton from 'components/buttons/TextButton'

import {
  updateHorseFilters
} from 'actions/browsehorses'

class HorseSearchFilterPanel extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    const {
      filterOpen,
      filters,
      updateOwnerShipType,
      updateYears,
      updateRacingHistory,
      updateAge,
      updateRacingType,
      updateCostMonthly,
      applyFilters
    } = this.props

    return (
      <FilterPanel
        isOpen={filterOpen}>
        <div className='row'>
          <Column
            className='col-xs-12 col-sm-4 col-md-4 col-lg-2'>

            <Header>
              Ownership Type
            </Header>

            <Radio
              label={'Fixed Period'}
              value={'Fixed Period'}
              checked={filters['ownership.type'].value === 'Fixed Period'}
              name={'ownership type'}
              id={'Fixed Period'}
              onChange={() => { updateOwnerShipType('Fixed Period') }}/>

            <Radio
              label={'Open Ended Period'}
              value={'Open Ended Period'}
              checked={filters['ownership.type'].value === 'Open Ended Period'}
              name={'ownership type'}
              id={'Open Ended Period'}
              onChange={() => { updateOwnerShipType('Open Ended Period') }}/>
          </Column>

          <Column className='col-xs-12 col-sm-4 col-md-4 col-lg-2'>
            <Header>
              number of years
            </Header>

            <Counter
              min={0}
              max={50}
              defaultCount={filters['ownership.years'].value.min}
              onChange={(value) => { updateYears(value) }} />
          </Column>

          <Column className='col-xs-12 col-sm-4 col-md-4 col-lg-2'>
            <Header>
              racing history
            </Header>

            <TextButton
              active={filters['racingHistory'].value === 'Raced'}
              text='Raced'
              modifier={['fluid', 'secondary-navy-blue']}
              onClick={() => { updateRacingHistory('Raced') }} />

            <TextButton
              active={filters['racingHistory'].value === 'Unraced'}
              text='Unraced'
              modifier={['fluid', 'secondary-navy-blue']}
              onClick={ () => { updateRacingHistory('Unraced') }} />
          </Column>

          <Column className='col-xs-12 col-sm-4 col-md-4 col-lg-2'>
            <Header>
              age of horse
            </Header>

            <TextButton
              active={filters['age'].value === '0-2'}
              text='0-2'
              modifier={['fluid', 'secondary-navy-blue']}
              onClick={() => {
                updateAge('0-2')
              }}
              />

            <TextButton
              text='3-5'
              modifier={['fluid', 'secondary-navy-blue']}
              active={filters['age'].value === '3-5'}
              onClick={() => {
                updateAge('3-5')
              }}
            />

            <TextButton
              active={filters['age'].value === 'Older Horse'}
              text='Older Horse'
              modifier={['fluid', 'secondary-navy-blue']}
              onClick={() => {
                updateAge('Older Horse')
              }}
              />
          </Column>

          <Column className='col-xs-12 col-sm-4 col-md-4 col-lg-2'>
            <Header>
              racing type
            </Header>

            <TextButton
              active={filters['racingType'].value === 'National Hunt'}
              text='National Hunt'
              modifier={['fluid', 'secondary-navy-blue']}
              onClick={() => {
                updateRacingType('National Hunt')
              }}
              />

            <TextButton
              active={filters['racingType'].value === 'Flat Racing'}
              text='Flat Racing'
              modifier={['fluid', 'secondary-navy-blue']}
              onClick={() => {
                updateRacingType('Flat Racing')
              }}
              />

            <TextButton
              active={filters['racingType'].value === 'Dual Purpose'}
              text='Dual Purpose'
              modifier={['fluid', 'secondary-navy-blue']}
              onClick={() => {
                updateRacingType('Dual Purpose')
              }}
              />
          </Column>

          <Column className='col-xs-12 col-sm-12'>
            <div className='row'>
              <Header className='col-xs-6 text-left'>
                monthly cost per 1% share
              </Header>

              <Header className='uppercase regular col-xs-6 text-right'>
                {`£${filters['cost.monthly'].value.min} - £${filters['cost.monthly'].value.max}`}
              </Header>
            </div>

           <Slider
            onChange={(values) => { updateCostMonthly(values) }}
            min={0}
            max={20000}
            defaultValue={[
              filters['cost.monthly'].value.min,
              filters['cost.monthly'].value.max
            ]}
            className='filter-panel__range-slider' />

          </Column>
        </div>

        <div className='hidden-sm-up'>
          <TextButton
            text='apply filters'
            modifier={['fluid']}
            onClick={applyFilters}
          />
        </div>
      </FilterPanel>
    )
  }
}

const mapStateToProps = ({browseHorses}, ownProps) => {
  const {
    filters,
    filterOpen
  } = browseHorses

  return {
    filters,
    filterOpen
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    updateOwnerShipType: (value) => {
      dispatch(updateHorseFilters({
        name: 'ownership.type',
        value
      }))

      ownProps.onUpdate()
    },
    updateYears: (value) => {
      dispatch(updateHorseFilters({
        name: 'ownership.years',
        value: {
          min: value
        }
      }))

      ownProps.onUpdate()
    },
    updateRacingHistory: (value) => {
      dispatch(updateHorseFilters({
        name: 'racingHistory',
        value
      }))

      ownProps.onUpdate()
    },
    updateAge: (value) => {
      dispatch(updateHorseFilters({
        name: 'age',
        value
      }))

      ownProps.onUpdate()
    },
    updateRacingType: (value) => {
      dispatch(updateHorseFilters({
        name: 'racingType',
        value
      }))

      ownProps.onUpdate()
    },
    updateCostMonthly: (values) => {
      dispatch(updateHorseFilters({
        name: 'cost.monthly',
        value: {
          min: values[0],
          max: values[1]
        }
      }))

      ownProps.onUpdate()
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps)(HorseSearchFilterPanel)
