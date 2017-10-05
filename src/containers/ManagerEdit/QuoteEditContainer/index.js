import React, { Component } from 'react'

import { connect } from 'react-redux'

import QuoteEdit from 'components/manageredit/QuoteEdit'

import EditButton from 'components/manageredit/EditButton'

import {performHorseEdit} from 'api/Services'

import PropTypes from 'prop-types'

class QuoteEditContainer extends Component {
  constructor (props) {
    super(props)

    const {data, dataKey} = props

    this.state = {
      showEdit: false,
      value: data[dataKey]
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
    const {submitUpdate} = this.props
    submitUpdate('test')
    // Save quote!
    // performHorseEdit({json: {quote: this.state.value}, query: {horseName: this.props.data.slug}})
    //   .then(this.hideEditPopup)
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
      children: Component
    } = this.props

    let newProps = !showEdit ? { value } : {}

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
        <Component {...newProps} />
      </div>
    )
  }
}

QuoteEditContainer.propTypes = {
  children: PropTypes.func.isRequired
}

const mapStateToProps = (state, ownProps) => {
  return {
    placeholder: ownProps.placeholder
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    submitUpdate: (values) => {

      console.log(values);

      // Only send avatarImage if it's an input file format and not a string
      // if (typeof avatarImage !== 'string') {
      //   payload['avatarImage'] = avatarImage
      // }
      //
      // const data = processMediaPayload({
      //   ...payload
      // })
      //
      // return dispatch(submitFormData(data))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuoteEditContainer)
