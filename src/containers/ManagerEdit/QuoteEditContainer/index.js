import React, { Component } from 'react'

import { connect } from 'react-redux'

import QuoteEdit from 'components/manageredit/QuoteEdit'

import EditButton from 'components/manageredit/EditButton'

import PropTypes from 'prop-types'

class QuoteEditContainer extends Component {
  constructor (props) {
    super(props)

    this.state = {
      showEdit: false,
      value: ''
    }

    this.saveQuote = this.saveQuote.bind(this)
    this.cancelQuote = this.cancelQuote.bind(this)
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

  saveQuote () {
    // Save quote!
    this.hideEditPopup()
  }

  cancelQuote () {
    // Cancel quote!
    this.setState({
      value: ''
    }, () => {
      this.hideEditPopup()
    })
  }

  updateValue (e) {
    if (e && e.target) {
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
      placeholder,
      children
    } = this.props

    const newProps = {
      value
    }

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
          onSave={this.saveQuote}
          onCancel={this.cancelQuote}
          isOpen={showEdit} />
        {children(showEdit ? {} : newProps)}
      </div>
    )
  }
}

QuoteEditContainer.propTypes = {
  children: PropTypes.func.isRequired
}

const mapStateToProps = (state, ownProps) => {
  return {
    placeholder: ownProps.placeholder,
    junk: {
      ...state
    }
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    dispatch: {
      ...ownProps
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuoteEditContainer)
