import React, { Component } from 'react'
import { connect } from 'react-redux'

import NewsTile from 'components/tiles/NewsTile'
import TextButton from 'components/buttons/TextButton'

import { Block, Grid } from 'components/masonry'

export class SyndicateOverview extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    const { data } = this.props
    const { tiles } = data

    return (
      <div className='syndicate'>
        <div className='syndicate__slider'>
          <div className='container'>
            Your horses slider here
          </div>
        </div>
        <div className='syndicate__feed-section container'>
          <h1 className='syndicate__title'>
            Racing News
          </h1>
          <div className='syndicate__feed'>
            <Grid
              targetBlockWidth={265}
              center={false}
              maxColumns={4}>
              {
                tiles.map((tile, index) => (
                  <Block width={1} key={index}>
                    <NewsTile
                      id={index}
                      text={tile.text}
                      src={tile.src}
                      providerSrc={tile.providerSrc}
                      date={tile.timeStamp}
                      className='syndicate__tile'
                    />
                  </Block>
                ))
              }
            </Grid>
          </div>
          <TextButton
            text='Load more'
            modifier='secondary'
            className='syndicate__more-btn'
            onClick={() => {}}
          />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  // TODO: Use state.syndicateOverview
  data: {
    tiles: new Array(12).fill({
      text: 'Tobefair: the Cheltenham favourite owned by 17 regulars of a Pembroke pub',
      timeStamp: '2017-06-06T14:11:42.820Z',
      src: 'a',
      providerSrc: 'b'
    })
  }
})

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getSyndicate: () => {
      // const syndicateId = ownProps.match.params.id
      // dispatch(fetchSyndicate({ syndicateId }))
    }
  }
}

export default (connect(
  mapStateToProps,
  mapDispatchToProps
)(SyndicateOverview))
