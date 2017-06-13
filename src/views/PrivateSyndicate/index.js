import React, { Component } from 'react'
import { connect } from 'react-redux'

import ButtonSection from 'components/syndicate/ButtonSection'

export class PrivateSyndicate extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div className='syndicate container'>
        <ButtonSection className='syndicate__buttons' />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
})

const mapDispatchToProps = (dispatch, ownProps) => ({
})

export default (connect(
  mapStateToProps,
  mapDispatchToProps
)(PrivateSyndicate))
