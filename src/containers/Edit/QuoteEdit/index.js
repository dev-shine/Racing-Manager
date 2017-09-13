import React, { Component } from 'react'

import { connect } from 'react-redux'

import QuoteEdit from 'components/edit/QuoteEdit'

import EditButton from 'components/edit/EditButton'

class QuoteEditContainer extends Component {
  constructor (props) {
    super(props)

    this.state = {
      showEdit: false,
      value: ''
    }

    this.showEditPopup = this.showEditPopup.bind(this)
    this.hideEditPopup = this.hideEditPopup.bind(this)
    this.updateValue = this.updateValue.bind(this)
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

  updateValue (e) {
    console.log('hi!')
    if (e && e.target && e.target.value) {
      this.setState({
        value: e.target.value
      })
    }
  }

  render () {
    const {
      showEdit,
      value
    } = this.state

    const {
      children,
      placeholder
    } = this.props

    return (
      <div>
        <EditButton
          onClick={this.showEditPopup}
          title='update quote'
          iconModifier='update' />
        <QuoteEdit
          handleChange={this.updateValue}
          text={value}
          placeholder={placeholder}
          onSave={this.hideEditPopup}
          onCancel={this.hideEditPopup}
          isOpen={showEdit} />
        {children}
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    placeholder: ownProps.placeholder
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuoteEditContainer)
