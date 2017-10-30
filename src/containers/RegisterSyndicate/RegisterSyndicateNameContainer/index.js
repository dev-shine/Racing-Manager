
import React, { Component } from 'react'

import { connect } from 'react-redux'

import Input from 'components/input/Input'

import TextButton from 'components/buttons/TextButton'

import FormSubmissionEdit from 'components/manageredit/FormSubmissionEdit'

import EditButton from 'components/manageredit/EditButton'

import TextEditContainer from 'containers/ManagerEdit/TextEditContainer'

import SyndicateBenefits from 'components/syndicate/SyndicateBenefits'

import {submitSyndicateData} from 'actions/syndicate'

import PropTypes from 'prop-types'

import {
  registerNameTitle,
  registerNameDescription
} from 'data/syndicate'

class RegisterSyndicateNameContainer extends Component {
  constructor (props) {
    super(props)

    this.state = {
      showEdit: false,
      value: ''
    }

  }

  render () {
    const nameData = {
      description: registerNameDescription,
      featuredImage: '',
      logo: ''
    }
    return (
      <div className="register-syndicate-name-content">
        <div className="col-xs-12">
          <div className="col-xs-12 col-sm-10 col-md-8 col-lg-7 name-description">
            <TextEditContainer
              title='Edit benefits'
              data={nameData}
              editLabel='update benefits'
              dataKey='benefits'
              maxLength={2000}
              submitAction={submitSyndicateData}>
              {
                ({ value }) => {
                  return (
                    <SyndicateBenefits title={registerNameTitle} titleModifier="h2" description={registerNameDescription} />
                  )
                }
              }
            </TextEditContainer>
          </div>
        </div>
        <div className="col-xs-12">
          <div className="col-xs-12 col-sm-8 col-md-6 col-lg-5 name-input-section">
            <Input
              inputClassName='text-center'
              name='counter'
              handleChange={() => {}}
              handleBlur={() => {}}
              placeholder={`ENTER DESIRED NAME`} />
          </div>
        </div>
        <div className="col-xs-12 name-footer">
          <div className="name-submit-button">
            <TextButton
              onClick={() => {  }}
              modifier={['fluid']}
              isDisabled={false}
              text='APPLY FOR NAME' />
            <div className="comment">
              <span>This button will become active one you have selected an available name</span>
            </div>
          </div>
          <div className="footer-image">
            <span>Powered by the </span>
            <img src="/assets/images/BHA_Logo1.jpg" />
          </div>
        </div>
      </div>
    )
  }
}

RegisterSyndicateNameContainer.propTypes = {
  children: PropTypes.func.isRequired
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
)(RegisterSyndicateNameContainer)
