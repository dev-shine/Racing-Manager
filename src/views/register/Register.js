/**
 *  @module react
 */
import React, { Component } from 'react'

/**
 * @module react-redux
 */
import { connect } from 'react-redux'

/**
 *  @module the NameForm Component
 */
import ManagerRegistration from 'containers/forms/ManagerRegistration'

/**
 * Register view
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
    this.context.router.push('/')
  }

  /**
   *  submitFormDataFail
   *  @description If the form fails
   *  @return {Void}
   */
  submitFormDataFail () {
    console && console.error('FAILED to submit data on signup__name')
  }

  /**
   * Render method
   * @returns { React.Component }
   */
  render () {
    return (
      <div className='register'>
        <div className="container">
          <div className="row">
            <div className="col-md-8 register__form-container">
              <p>We only need a short few details to get you started with your profile. We may ask you for a few more details later on when you begin to develop
                your account.</p>
              <ManagerRegistration
                onSubmitSuccess={this.onSubmitSuccess}
                onSubmitFail={this.onSubmitFail} />
            </div>
            <div className="col-md-4 register__quick-register"></div>
          </div>
        </div>
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
)(Register)
