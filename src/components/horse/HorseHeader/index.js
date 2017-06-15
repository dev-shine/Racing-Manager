import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'utils/classnames'

import TextButton from 'components/buttons/TextButton'
import Separator from 'components/gui/Separator'
import { Link } from 'react-router-dom'
import Accordion from 'components/accordion/BaseAccordion'
import Parallax from 'components/parallax/BaseParallax/index'
// import LazyImage from 'components/image'

import HorseBrief from 'components/horse/HorseBrief'
import HorseNumericDetails from 'components/horse/HorseNumericDetails'
import HorseDetails from 'components/horse/HorseDetails'

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
      image = 'IMAGE',
      name,
      age,
      color,
      gender,
      owner = {},
      runs,
      wins,
      places,
    } = data

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
        value: '-'
      },
      {
        title: 'TFR',
        value: '-'
      }
    ]

    return (
      <div className={modifiedClassNames}>
        <Parallax>
          <div className='horse-header__image'>
            {image}
          </div>
        </Parallax>
        <div className='horse-header__details-tile visible-md-up'>
          <div className='horse-header__details'>
            <div className='horse-header__small-details'>
              <HorseBrief data={data} />
              <HorseNumericDetails data={numericData} className='' />
            </div>
            <HorseDetails data={data} />
          </div>
        </div>
        <div className='container hidden-md-up'>
          <h1 className='horse-header__main-title'>
            {name}
          </h1>
          <div className='horse-header__brief-info'>
            {age}yo <span className='horse-header__info'>{color} {gender}</span> Owned by: <Link to='' className='horse-header__details-link'>{owner.name}</Link>
          </div>
          <TextButton
            text='View details'
            className='horse-header__btn-details'
            modifier={['sm', 'secondary']}
            onClick={this.handleToggleDetails}
          />
        </div>
        <div className='remove-me visible-md-up'>
          123
        </div>
        <div className='hidden-md-up'>
          <Accordion isOpen={isOpen}>
            <div className='horse-header__details'>
              <div className='container'>
                <div className='horse-header__small-details row'>
                  <HorseNumericDetails data={numericData} className='' />
                </div>
                <div className='row'>
                  <HorseDetails data={data} />
                </div>
              </div>
            </div>
            <div className='horse-header__accordion'>
              <div className='container'>
                <div className='col-xs-12 col-md-7'>
                  <h1 className='horse-header__description-title'>
                    About the horse
                  </h1>
                  <Separator modifier='white' />
                  <p className='horse-header__paragraph'>
                    Tobefair (9-1) took his winning streak to six with his best performance to date in the Pertemps Network Handicap Hurdle (Series Qualifier) at Warwick. Debra Hamer's seven-year-old started his rich vein of form with three victories in the summer of 2015 and was striking for the third time this term.
                  </p>
                  <Link to='/' className='link--italic horse-header__read-more'>
                    Read more...
                  </Link>
                  <div className='horse-header__small-title horse-header__comment-title'>
                    Timeform comment
                  </div>
                  <p className='horse-header__paragraph'>
                    Jumps: sturdy gelding: useful handicap hurdler: won all 3 starts in 2015/16 and at Ffos Las in November, Chepstow in December, Warwick in January and Newbury (by 1½ lengths from Morello Royale) in February: 10/1, well below form in 24-runner Pertemps Final at Cheltenham last time: stays 3¼m: acts on soft and good to firm going: has worn cheekpieces, including latest start: often races towards rear, sometimes idles.
                  </p>
                  <Link to='/' className='link--italic horse-header__read-more'>
                    Read more...
                  </Link>
                  <TextButton
                    text='Syndicate page'
                    className='horse-header__syndicate-button'
                    modifier={['sm']}
                    onClick={() => {}}
                  />
                </div>
                <div className='col-md-4 col-sm-offset-1 visible-md-up'>
                  <h1 className='horse-header__description-title'>
                    Your Involvement
                  </h1>
                  <Separator modifier='white' />
                  <div className='horse-header__small-title'>
                    Ownership
                  </div>
                  <ul className='disc-list'>
                    <li>2 years fixed period ownership</li>
                    <li>Ends on 02/04/2018</li>
                    <li>You own 5 shares out of 20 (25%)</li>
                  </ul>
                  <Link to='/' className='link--italic horse-header__read-more'>
                    Read more...
                  </Link>
                  <div className='horse-header__small-title'>
                    Benefits
                  </div>
                  <ul className='disc-list'>
                    <li>Pro rata prize money share</li>
                    <li>Pro rata share of resale proceeds</li>
                    <li>Regular yard visits</li>
                    <li>Personalised messages and clips from the team</li>
                    <li>Live content from the races</li>
                  </ul>
                  <Link to='/' className='link--italic horse-header__read-more'>
                    Read more...
                  </Link>
                </div>
              </div>
            </div>
          </Accordion>
          <div className='horse-header__involvement'>
            <div className='container'>
              <h1 className='horse-header__description-title'>
                Your Involvement
              </h1>
              <Separator modifier='white' />
              <div className='horse-header__small-title'>
                Ownership
              </div>
              <ul className='disc-list'>
                <li>2 years fixed period ownership</li>
                <li>Ends on 02/04/2018</li>
                <li>You own 5 shares out of 20 (25%)</li>
              </ul>
              <Link to='/' className='link--italic horse-header__read-more'>
                Read more...
              </Link>
            </div>
          </div>
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
