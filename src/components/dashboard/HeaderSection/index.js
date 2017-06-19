/**
 *  @module React
 */
import React, { PureComponent } from 'react'

/**
 *  @module PropTypes
 */
import PropTypes from 'prop-types'

/**
 *  @module classNames
 */
import classNames from 'utils/classnames'

/**
 *  @module TextButton
 */
import TextButton from 'components/buttons/TextButton'

/**
 *  @module HorseCard
 */
import HorseCard from 'components/cards/HorseCard'

/**
 *  @module CarouselArrow
 */
import CarouselArrow from 'components/buttons/CarouselArrow'

/**
 *  @module CarouselPaginationButton
 */
import CarouselPaginationButton from 'components/buttons/CarouselPaginationButton'

/**
 *  @module Carousel
 */
import CarouselNew from 'components/carousel/newCarousel'

/**
 * dummy fn
 */
const noop = () => {}

/**
 *  @class
 *  @name HeaderSection
 *  @extends {PureComponent}
 */
class HeaderSection extends PureComponent {
  /**
   *  @constructor
   */
  constructor (props) {
    super(props)

    // Initial state
    this.state = {
      horseActiveIndex: 0,
      currentSyndIndex: 0
    }

    // bind custom fns
    this.updateHorseActiveIndex = this.updateHorseActiveIndex.bind(this)
    this.updateNameActiveIndex = this.updateNameActiveIndex.bind(this)
    this.formatHorseData = this.formatHorseData.bind(this)
  }

  /**
   *  updateHorseActiveIndex
   *  @description Will update the horse pagination to the correct slide.
   *  @param  {Number} index
   */
  updateHorseActiveIndex (index) {
    // Get the horse syndicate name from the horses array with the given index.
    const {
      syndName
    } = this.carouselData.syndHorses[index]

    // Get the index of the syndicate name in the syndNames array
    // This will map to the correct carousel index.
    const nameActiveIndex = this.carouselData.syndNames.map(({name}) => name).indexOf(syndName)

    // Tell the name carousel to go to the correct index.
    if (this.refs.carousel) {
      this.refs.carousel.goToSlide(nameActiveIndex, false)
    }

    this.setState({
      horseActiveIndex: index,
      currentSyndIndex: index
    })
  }

  /**
   *  updateNameActiveIndex
   *  @description Will update the horse slider position to the correct slide depending on syndicate chosen.
   *  @param  {Number} index
   */
  updateNameActiveIndex (index) {
    const {
      name
    } = this.carouselData.syndNames[index]

    // Get the first index of the horse depending on the name of the syndicate.
    const horseActiveIndex = this.carouselData.syndHorses.map(({syndName}) => syndName).indexOf(name)

    if (this.refs.horseCarousel) {
      this.refs.horseCarousel.goToSlide(horseActiveIndex, false)
    }

    this.setState({
      horseActiveIndex,
      currentSyndIndex: index
    })
  }

  /**
   *  formatHorseData
   *  @description Will create formatted data for use on the carousels.
   *  @return {Object}
   */
  formatHorseData () {
    const {
      data
    } = this.props

    return data.reduce((obj, syndicate, index) => {
      const { horses } = syndicate

      // Push data for the syndicate names carousel
      obj.syndNames.push({
        name: syndicate.name,
        length: horses.length
      })

      // Push an array of all horses in each syndicate, used for the horse card carousel.
      obj.syndHorses.push(...horses.map(horse => ({
        syndName: syndicate.name,
        syndSlug: syndicate.slug,
        syndColor: syndicate.color,
        syndIndex: index, // Used to determine which horse cards to highlight
        ...horse
      })))

      // Update the length of the overall horses for pagination buttons.
      obj.length += horses.length

      return obj
    }, {
      syndNames: [],
      syndHorses: [],
      length: 0
    })
  }

  render () {
    const {
      className,
      modifier,
      title,
      headerButtonText
    } = this.props

    const {
      horseActiveIndex,
      currentSyndIndex
    } = this.state

    // Get the data needed for the carousels
    this.carouselData = this.formatHorseData()

    /**
     *  Class names for the container
     *  @type {String}
     */
    const modifiedClassNames = classNames('dashboard-header', className, modifier)

    return (
      <div className={modifiedClassNames}>
        <div className='dashboard-header__heading row-no-margin dashboard-header__section'>
          <div className='col-xs-8 col-sm-6 align-middle'>
            <h1>
              {title}
            </h1>
          </div>
          <div className='col-xs-4 col-sm-6 align-middle'>
            {/* Depending on screen width (mobile or desktop) show the correct button */}
            <TextButton
              className='dashboard-header__header-button visible-sm-up'
              onClick={noop}
              modifier='xs'
              text={headerButtonText}/>
            <TextButton
              className='dashboard-header__header-button hidden-sm-up'
              onClick={noop}
              modifier='xs'
              text='+'/>
          </div>
        </div>
        <div className='dashboard-header__items-carousel dashboard-header__section'>
          <CarouselNew
            ref='carousel'
            slideWidth={'266px'}
            breakPoints={{
              480: {
                slideWidth: 1
              }
            }}
            onSlideClick={index => { this.refs.carousel.goToSlide(index) }}
            afterSlide={ index => { this.updateNameActiveIndex(index) }}
            cellAlign='left'
            cellSpacing={30}>
            {
              this.carouselData.syndNames.map(({name, length}, index) => {
                return (
                  <h2
                    key={index}>
                    {name}<sup className='small'>{length}</sup>
                  </h2>
                )
              })
            }
          </CarouselNew>
          <CarouselArrow
            className='dashboard-header__arrow'
            modifier={['left', 'nobg', 'white']}
            iconModifier={['leftarrow']}
            onClick={() => { this.refs.carousel.prevSlide() }}
          />
          <CarouselArrow
            className='dashboard-header__arrow'
            modifier={['right', 'nobg', 'white']}
            iconModifier={['rightarrow']}
            onClick={() => { this.refs.carousel.nextSlide() }}
          />
        </div>
        <div className='dashboard-header__items-list dashboard-header__section wave-bg--faded section-shadow--carousel'>
          <CarouselNew
            ref='horseCarousel'
            onSlideClick={index => { this.refs.horseCarousel.goToSlide(index) }}
            afterSlide={index => { this.updateHorseActiveIndex(index) }}
            cellAlign='left'
            cellSpacing={30}
            slideWidth={'266px'}
            breakPoints={{
              480: {
                slideWidth: 1
              }
            }}>
            {
              this.carouselData.syndHorses.map((horse, index) => {
                return (
                  <HorseCard
                    isActive={horse.syndIndex === currentSyndIndex}
                    key={index}
                    title={horse.name}
                    color={horse.syndColor}
                    subtitle={`${horse.age}yo ${horse.gender}`} // Needs to have the STYLE too!
                    stats={[{
                      name: 'runs',
                      value: horse.runs
                    }, {
                      name: 'wins',
                      value: horse.wins
                    }, {
                      name: 'places',
                      value: horse.places
                    }, {
                      name: 'OR',
                      value: '-'
                    }]}
                    info={[{
                      name: 'Trainer name',
                      value: horse.trainer.name
                    }, {
                      name: 'Syndicate name',
                      value: horse.syndName
                    }, {
                      name: 'Manager',
                      value: horse.owner.name
                    }, {
                      name: 'Ownership',
                      value: '5/12 shares'
                    }]}
                    extra={{
                      url: `/horse/${horse.slug}`
                    }}
                    bottomUrl={`/syndicate/${horse.syndSlug}`}
                    className='dashboard-header__slide-item' />
                )
              })
            }
          </CarouselNew>
          <CarouselArrow
              className='dashboard-header__arrow visible-sm-up'
              modifier={['left', 'nobg', 'white', 'bottom']}
              iconModifier={['leftarrow']}
              onClick={() => { this.refs.horseCarousel.prevSlide() }}
            />
            <CarouselArrow
              className='dashboard-header__arrow visible-sm-up'
              modifier={['right', 'nobg', 'white', 'bottom']}
              iconModifier={['rightarrow']}
              onClick={() => { this.refs.horseCarousel.nextSlide() }}
            />
          <div className='dashboard-header__pagination hidden-sm-up'>
            <CarouselPaginationButton
              length={this.carouselData.length}
              activeIndex={horseActiveIndex} />
          </div>
        </div>
      </div>
    )
  }
}

/**
 *  propTypes
 *  @type {Object}
 */
HeaderSection.propTypes = {
  title: PropTypes.string,
  headerButtonText: PropTypes.string,
  data: PropTypes.array
}

/**
 *  defaultProps
 *  @type {Object}
 */
HeaderSection.defaultProps = {
  title: 'your horses',
  headerButtonText: '+ add another horse',
  data: []
}

/**
 *  @module HeaderSection
 */
export default HeaderSection
