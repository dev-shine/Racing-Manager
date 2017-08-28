import React, { Component } from 'react'

import { connect } from 'react-redux'

import { fetchHorseInfo } from 'actions/horse'

class PrivateHorseStatistics extends Component {
  componentDidMount () {
    this.props.getHorseInfo()
  }

  render () {
    return (
      <div />
    )
  }
}

const mapStateToProps = ({ horse }) => ({
  ...horse.horseInfo
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  getHorseInfo: () => {
    const name = ownProps.match.params.name
    return dispatch(fetchHorseInfo(name))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PrivateHorseStatistics)
