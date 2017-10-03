import React, { Component } from 'react'

import { connect } from 'react-redux'

import TextEdit from 'components/manageredit/TextEdit'

import EditButton from 'components/manageredit/EditButton'

import {performHorseEdit} from 'api/Services'

import PropTypes from 'prop-types'

class TextEditContainer extends Component {
  constructor (props) {
    super(props)

    this.state = {
      showEdit: false,
      value: props.initialValue
    }

    this.showEditPopup = this.showEditPopup.bind(this)
    this.cancelQuote = this.cancelQuote.bind(this)
    this.updateValue = this.updateValue.bind(this)
    this.saveQuote = this.saveQuote.bind(this)
    this.hideEditPopup = this.hideEditPopup.bind(this)
  }

  showEditPopup () {
    console.log(this.props.data)
    this.setState({
      showEdit: true,
      value: this.props.initialValue
    })
  }

  hideEditPopup () {
    this.setState({
      showEdit: false
    })
  }

  cancelQuote () {
    // Cancel quote!
    this.setState({
      value: this.props.initialValue
    }, () => {
      this.hideEditPopup()
    })
  }

  saveQuote () {
    // Save quote!
    performHorseEdit({json: {[this.props.updateValue]: this.state.value}, query: {horseName: this.props.data.slug}})
      .then(() => {
        this.props.onSave()
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
      canEdit,
      title = null,
      editLabel = 'update description',
      children: Component,
      placeholder,
      maxLength = 2000
    } = this.props

    if (!canEdit) { // Child passes stright through
      return <Component />
    }

    return (
      <div>
        <EditButton
          onClick={this.showEditPopup}
          title={editLabel}
          position='absolute'
          iconModifier='update' />
        <TextEdit
          title={title}
          handleChange={this.updateValue}
          text={value}
          placeholder={placeholder}
          onSave={this.saveQuote}
          onCancel={this.cancelQuote}
          isOpen={showEdit}
          maxLength={maxLength}/>
        <Component />
      </div>
    )
  }
}

TextEditContainer.propTypes = {
  children: PropTypes.func.isRequired,
  canEdit: PropTypes.bool.isRequired
}

const mapStateToProps = (state, ownProps) => {
  return {
    placeholder: ownProps.placeholder
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TextEditContainer)
