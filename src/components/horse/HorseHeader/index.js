import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'utils/classnames'

import TextButton from 'components/buttons/TextButton'
import Separator from 'components/gui/Separator'
import Accordion from 'components/accordion/BaseAccordion'
import Hero from 'components/parallax/Hero'
import Carousel from 'components/carousel'

import HorseBrief from 'components/horse/HorseBrief'
import HorseNumericDetails from 'components/horse/HorseNumericDetails'
import HorseDetails from 'components/horse/HorseDetails'

import HorseBigSection from 'components/horse/HorseBigSection'
import HorseSmallSection from 'components/horse/HorseSmallSection'

import HorseAboutInfo from 'components/horse/HorseAboutInfo'
import HorseOwnershipInfo from 'components/horse/HorseOwnershipInfo'
import HorseBenefitsInfo from 'components/horse/HorseBenefitsInfo'

import { timestampToDate } from 'utils/dateutils'
import { calcPercent, constructStaticUrl } from 'utils/horseutils'

class HorseHeader extends Component {
  constructor (props) {
    super(props)

    this.state = {
      showDetails: false
    }

    this.handleToggleDetails = this.handleToggleDetails.bind(this)
  }

  handleToggleDetails () {
    this.setState((state) => ({
      showDetails: !state.showDetails
    }))
  }

  render () {
    const { showDetails: isOpen } = this.state
    const { className, modifier, data = {} } = this.props

    const modifiedClassNames = classNames('horse-header', className, modifier)

    const {
      name,
      age,
      color,
      gender,
      owner,
      runs,
      wins,
      places,
      or,
      tfr,
      trainer = {},
      foalingDate,
      sire = {},
      dam = {},
      featuredImage,
      description,
      timeformComments = {},
      style,
      shares = {
        owned: 0,
        total: 0
      },
    } = data

    const briefData = {
      name,
      age,
      color,
      gender,
      owner,
    }

    const numericData = [
      {
        title: 'Runs',
        value: runs
      },
      {
        title: 'Wins',
        value: wins
      },
      {
        title: 'Places',
        value: places
      },
      {
        title: 'OR',
        value: or
      },
      {
        title: 'TFR',
        value: tfr
      }
    ]

    const detailsData = [
      {
        title: 'Trainer',
        value: trainer.name,
        // isLink: true,
        // href: '/',
      },
      {
        title: 'Prev Trainers',
        value: '-',
        // isLink: true,
        // href: '/',
      },
      {
        title: 'Breeder',
        value: '-',
      },
      {
        title: 'Style',
        value: style,
      },
      {
        title: 'Foaling Date',
        value: timestampToDate(foalingDate, 'D MMMM YYYY')
      },
      {
        title: 'Sire',
        value: sire.name,
        // isLink: true,
        // href: '/',
      },
      {
        title: 'Dam',
        value: dam.name,
        // isLink: true,
        // href: '/',
      },
      {
        title: 'Dam Sire',
        value: dam.sireName,
        // isLink: true,
        // href: '/',
      },
      {
        title: 'Racetrack Siblings',
        value: '-',
        // isLink: true,
        // href: '/',
      },
      {
        title: 'Prize Money',
        value: '-',
        className: 'horse-header__details-prices',
      },
      {
        title: 'Public Sales Price',
        value: '-',
      },
      {
        title: 'Current Value',
        value: '-',
      },
    ]

    const aboutData = {
      description,
      timeformComments
    }

    const ownershipYears = 2
    const ownershipEndDate = timestampToDate(
      new Date(new Date().setFullYear(new Date().getFullYear() + ownershipYears))
    )

    const ownershipData = [
      `${ownershipYears} years fixed period ownership`,
      `Ends on ${ownershipEndDate}`,
      `You own ${shares.owned} shares out of ${shares.total} (${calcPercent(shares.owned, shares.total)}%)`,
    ]

    const benefitsData = [
      'Pro rata prize money share',
      'Pro rata share of resale proceeds',
      'Regular yard visits',
      'Personalised messages and clips from the team',
      'Live content from the races',
    ]

    return (
      <div className={modifiedClassNames}>
        <div className='horse-header__image'>
          <Hero featuredImage={constructStaticUrl(featuredImage)} />
          <div className='horse-header__details-container visible-md-up'>
            <div className='horse-header__details-tile'>
              <div className='horse-header__details section-shadow'>
                <div className='horse-header__small-details'>
                  <HorseBrief data={briefData} />
                  <HorseNumericDetails data={numericData} />
                </div>
                <HorseDetails data={detailsData} />
              </div>
            </div>
          </div>
        </div>
        <div className='row visible-md-up'>
          <div className='horse-header__content container no-padding'>
            <HorseBigSection className='col-md-8'>
              <HorseAboutInfo data={aboutData} />
            </HorseBigSection>
            <HorseSmallSection className='col-md-4'>
              <h1 className='horse-header__description-title'>
                Your Involvement
              </h1>
              <Separator modifier='white' />
              <HorseOwnershipInfo data={ownershipData} />
              <HorseBenefitsInfo data={benefitsData} />
            </HorseSmallSection>
          </div>
        </div>
        <div className='hidden-md-up'>
          <div className='container'>
            <div className='horse-header__brief-info'>
              <HorseBrief data={briefData} />
              <TextButton
                text={isOpen ? 'Hide details' : 'View details'}
                className='horse-header__btn-details'
                modifier={['md', 'secondary']}
                onClick={this.handleToggleDetails}
              />
            </div>
          </div>
          <Accordion isOpen={isOpen}>
            <div className='horse-header__details section-shadow'>
              <div className='container'>
                <div className='row'>
                  <HorseNumericDetails data={numericData} />
                </div>
                <div className='row'>
                  <HorseDetails data={detailsData} />
                </div>
              </div>
            </div>
            <HorseBigSection className='col-md-8'>
              <div className='container'>
                <HorseAboutInfo data={aboutData} />
              </div>
            </HorseBigSection>
          </Accordion>
          <HorseSmallSection className='col-md-8'>
            <Carousel ref='carousel' showPagination>
              <div className='container'>
                <h1 className='horse-header__medium-title'>
                  Your Involvement
                </h1>
                <Separator modifier='white' />
                <HorseOwnershipInfo data={ownershipData} />
              </div>
              <div className='container'>
                <h1 className='horse-header__medium-title'>
                  Your Involvement
                </h1>
                <Separator modifier='white' />
                <HorseBenefitsInfo data={benefitsData} />
              </div>
            </Carousel>
          </HorseSmallSection>
        </div>
      </div>
    )
  }
}

HorseHeader.propTypes = {
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  modifier: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
}

HorseHeader.defaultProps = {
  className: '',
  modifier: '',
}

export default HorseHeader
