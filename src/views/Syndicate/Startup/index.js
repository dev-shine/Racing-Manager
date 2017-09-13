import React, { Component } from 'react'

import { connect } from 'react-redux'

import View from 'components/routing/View'

import titleize from 'titleize'

import { fetchSyndicateInfo, clearSyndicateData } from 'actions/syndicate'

const mapStateToProps = ({ syndicate }, ownProps) => ({
  ...syndicate
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  getSyndicateInfo: () => {
    const name = ownProps.match.params.name
    dispatch(fetchSyndicateInfo({ name }))
  },
  clearSyndicateData: () => {
    return dispatch(clearSyndicateData())
  }
})

const SyndicateStartUpHoc = (WrapperComponent) => {
  class SyndicateStartUp extends Component {
    constructor (props) {
      super(props)
    }

    componentDidMount () {
      this.props.getSyndicateInfo()
    }

    componentWillUnmount () {
      this.props.clearSyndicateData()
    }

    render () {
      const {
        name
      } = this.props

      return (
        <View title={titleize(name || '')} isPrefixed={false}>
          <WrapperComponent {...this.props} />
        </View>
      )
    }
  }

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(SyndicateStartUp)
}

export default SyndicateStartUpHoc
