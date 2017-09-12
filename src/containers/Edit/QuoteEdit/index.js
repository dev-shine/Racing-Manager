import React, { Component } from 'react'

import { connect } from 'react-redux'

import QuoteEdit from 'components/edit/QuoteEdit'

import EditButton from 'components/edit/EditButton'

class QuoteEditContainer extends Component {
  constructor (props) {
    super(props)

    this.state = {
      showEdit: false
    }

    this.showEditPopup = this.showEditPopup.bind(this)
    this.hideEditPopup = this.hideEditPopup.bind(this)
  }

  showEditPopup () {
    this.setState({
      showEdit: true
    })
  }

  hideEditPopup () {
    this.setState({
      showEdit: false
    })
  }

  render () {
    const {
      showEdit
    } = this.state

    const {
      children
    } = this.props

    return (
      <div>
        <EditButton
          onClick={this.showEditPopup}
          title='update quote'
          iconModifier='update' />
        <QuoteEdit
          onSave={this.hideEditPopup}
          onCancel={this.hideEditPopup}
          isOpen={showEdit} />
        {children}
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {}
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuoteEditContainer)
