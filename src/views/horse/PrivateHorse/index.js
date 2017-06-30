import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import titleize from 'titleize'

import View from 'components/common/View'

import AjaxLoader from 'components/ajaxloader'
import { fetchHorseInfo } from 'actions/horse'

import HorseHeader from 'components/horse/HorseHeader'
import HorseAccordions from 'components/horse/HorseAccordions'
// import SubmitPost from 'containers/horseOverview/SubmitPost'
import FeedGallery from 'components/tiles/FeedGallery'

import TextButton from 'components/buttons/TextButton'
import Separator from 'components/gui/Separator'

export class PrivateHorse extends Component {
  componentDidMount () {
    this.props.getHorseInfo()
  }

  componentWillReceiveProps (nextProps) {
    if (this.props.posted !== nextProps.posted && nextProps.posted) {
      this.props.getHorseInfo()
    }
  }

  render () {
    const {
      posting,
      fetching,
      data = {}
    } = this.props

    const {
      _id,
      description,
      timeformComments = {},
      messages = []
    } = data

    return (
      <View title={titleize(data.name || '')} notPrefixed>
        <div className='horse-overview'>
          <HorseHeader
            data={data}
            leftSection={(
              <div>
                <h1 className='horse-header__medium-title'>
                  About the horse
                </h1>
                <Separator modifier='white' />
                <div>
                  <p className='horse-header__paragraph'>
                    {description || 'No description ...'}
                  </p>
                </div>
                <div className='horse-header__small-title horse-header__comment-title'>
                  Timeform comment
                </div>
                {(!timeformComments.flat && !timeformComments.jump) && (
                  <p className='horse-header__paragraph'>
                    No timeform comments..
                  </p>
                )}
                {timeformComments.flat && (
                  <p className='horse-header__paragraph'>
                    Flat: {timeformComments.flat}
                  </p>
                )}
                {timeformComments.jump && (
                  <p className='horse-header__paragraph'>
                    Jump: {timeformComments.jump}
                  </p>
                )}
                <Link to={`/syndicate/${'-'}`}>
                  <TextButton
                    text='Syndicate page'
                    className='horse-header__syndicate-button'
                    modifier='md'
                    onClick={() => {}}
                  />
                </Link>
              </div>
            )}
            rightSection={(
              <div>2</div>
            )}
            mobileSection={(
              <div>3</div>
            )}
            slideSection={[1, 2, 3]}
          />
          <HorseAccordions />
          <div className='container horse-overview__message-post'>
            <div className='row'>
              <h1 className='horse-overview__main-title horse-overview__update-title'>
                Updates
              </h1>
            </div>
          </div>
          <div className='horse-overview__grid container'>
            <FeedGallery
              tiles={messages} />
          </div>
          {(posting || fetching) && <AjaxLoader />}
        </div>
      </View>
    )
  }
}

const mapStateToProps = ({ horse }) => ({
  ...horse
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  getHorseInfo: () => {
    const name = ownProps.match.params.name
    dispatch(fetchHorseInfo(name))
  }
})

export default (connect(
  mapStateToProps,
  mapDispatchToProps
)(PrivateHorse))

// const div = () => (
//   <div>

//   </div>
// )

/*
 const aboutData = {
 description,
 timeformComments,
 slug
 }

 const ownershipYears = 2
 const ownershipEndDate = timestampToDate(
 new Date(new Date().setFullYear(new Date().getFullYear() + ownershipYears))
 )

 const ownershipData = [
 `${ownershipYears} years fixed period ownership`,
 `Ends on ${ownershipEndDate}`,
 `You own ${calcPercent(shares.owned, shares.total).toFixed(2)}% shares (${shares.owned} out of ${shares.total})`,
 ]

 1.<HorseAboutInfo data={aboutData} />

 2
 <h1 className='horse-header__description-title'>
 Your Involvement
 </h1>
 <Separator modifier='white' />
 <HorseOwnershipInfo data={ownershipData} />
 <HorseBenefitsInfo data={benefitsList} />


 3

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
 <HorseBenefitsInfo data={benefitsList} />
 </div>
 */
