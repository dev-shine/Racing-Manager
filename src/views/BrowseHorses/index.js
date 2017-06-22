/**
 *  @module React, Component
 */
import React, { Component } from 'react'

/**
 *  @module connect
 */
import { connect } from 'react-redux'

import View from 'components/common/View'
import { BROWSE_HORSES as title } from 'data/titles'

/**
 *  @module TitleHero
 */
import TitleHero from 'components/common/TitleHero'

export class BrowseHorses extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <View title={title}>
        <div className='browse-horses'>
          <TitleHero/>
        </div>
      </View>
    )
  }
}

/**
 *  mapStateToProps
 *  @param  {Object} state
 *  @param  {Object} ownProps
 *  @return {Object}
 */
const mapStateToProps = (state, ownProps) => ({
})

/**
 *  mapDispatchToProps
 *  @param  {Function} dispatch
 *  @param  {Object} ownProps
 *  @return {Object}
 */
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
  }
}

export default (connect(
  mapStateToProps,
  mapDispatchToProps
)(BrowseHorses))
