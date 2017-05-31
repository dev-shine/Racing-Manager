/**
 *  @module react
 */
import React, { Component } from 'react'

/**
 * @module react-redux
 */
import { connect } from 'react-redux'

/**
 *  @module TextTile
 */
import TextTile from 'components/tiles/TextTile'

/**
 *  @name HorseOverview
 *  @class
 *  @extends {Component}
 */
export class HorseOverview extends Component {
  /**
   *  @constructor
   */
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div className='horse-overview'>
        <div className='horse-overview__grid container'>
          <TextTile
            name='Nick the god'
            date='2 days ago'
            text={`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iudicante iuberet refugiendi, democritus brevi easque quaerat horrida infinitis. Imperitos litterae explicavi.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iudicante iuberet refugiendi, democritus brevi easque quaerat horrida infinitis. Imperitos litterae explicavi.ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss`} />
        </div>
      </div>
    )
  }
}

/**
 *  mapStateToProps
 *  @param  {Object} state
 *  @param  {Object} ownProps
 *  @return {Object}
 */
const mapStateToProps = (state, ownProps) => {
  return {}
}

/**
 *  @name mapDispatchToProps
 *  @param  {Function} dispatch
 *  @param  {Object} ownProps
 *  @return {Object}
 */
const mapDispatchToProps = (dispatch, ownProps) => {
  return {}
}

/**
 *  @module connect
 */
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HorseOverview)
