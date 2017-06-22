/**
 *  @module react
 */
import React, { Component } from 'react'

/**
 * @module react-redux
 */
import { connect } from 'react-redux'

/**
 *  @module RegisterContainer
 */
import RegisterContainer from 'containers/register'

/**
 *  @module withRouter
 */
import { withRouter } from 'react-router-dom'

/**
 *  @module TitleHero
 */
import TitleHero from 'components/common/TitleHero'

/**
 *  @module resetRegisterForm
 */
import {
  resetRegisterForm
} from 'actions/register'

/**
 * @name Register
 * @class
 * @extends Component
 */
export class Register extends Component {
  /**
   * @constructor
   * @param { Object } props
   */
  constructor (props) {
    super(props)

    this.submitFormDataSuccess = this.submitFormDataSuccess.bind(this)
    this.submitFormDataFail = this.submitFormDataFail.bind(this)
  }

  /**
   *  submitFormDataSuccess
   *  @description If the form is successfull
   *  @return {Void}
   */
  submitFormDataSuccess () {
    this.props.history.push('/')
  }

  /**
   *  submitFormDataFail
   *  @description If the form fails
   *  @return {Void}
   */
  submitFormDataFail () {
    console && console.error('FAILED to submit data on register')
  }

  componentWillUnmount () {
    this.props.resetForm()
  }

  /**
   * Render method
   * @returns { React.Component }
   */
  render () {
    return (
      <div className='register'>
        <TitleHero
          title='Join the action!'/>
        <div className='container'>
          <div className='row register__content'>
            <div className='col-sm-8 col-md-7 register__form-container'>
              <p>We only need a short few details to get you started with your profile. We may ask you for a few more details later on when you begin to develop
                your account.</p>
              <RegisterContainer
                onSubmitSuccess={this.submitFormDataSuccess}
                onSubmitFail={this.submitFormDataFail} />
            </div>
            <div className='col-sm-4 col-md-5 register__quick-register' />
          </div>
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
  return {
    resetForm: () => {
      dispatch(resetRegisterForm())
    }
  }
}

/**
 *  @module connect
 */
export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Register))
