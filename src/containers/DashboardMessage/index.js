import React, { Component } from 'react'

import { connect } from 'react-redux'

import SubmitFeedPost from 'components/dashboard/SubmitFeedPost'

import MessageInput from 'components/dashboard/MessageInput'

import { updateMessageReceiver, updateMessageSender } from 'actions/dashboard'

import processMediaPayload from 'utils/mediapayload'

import {
  submitHorseUpdate
} from 'actions/horse'

/**
 *  @class
 *  @name MemberDashboard
 *  @extends {Component}
 */
export class MemberDashboard extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    let searchNames = this.props.dashboardData.ownership && this.props.dashboardData.ownership.map((row) => (
      {
        label: row.name,
        value: row.slug
      }
    ))

    return (
      <div>
        <div className='msg-input to'>
          <div className="input-label">
            <h5>TO</h5>
          </div>
          <MessageInput
            name='receiver'
            onSubmit={ () => {} }
            handleSelectName={ (data) => { this.props.updateMessageReceiver(data) } }
            placeholder='HORSE NAME'
            searchNames={searchNames}
            multi={true}
          />
        </div>
        {/*}
        <div className='msg-input from'>
          <div className="input-label">
            <h5>FROM</h5>
          </div>
          <MessageInput
            name='sender'
            onSubmit={ () => {} }
            handleSelectName={  (data) => { this.props.updateMessageSender(data) }  }
            placeholder='NOT SELECTED'
            searchNames={searchNames}
            multi={false}
          />
        </div>
        */}
        <SubmitFeedPost
          // posted={posted}
          // submitFeedUpdate={this.postHorseFeed}
          reducerName='dashboardFeedPost'
        />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const {
    dashboard
  } = state

  const {
    message
  } = dashboard

  return {
    sender: message.sender || '',
    receiver: message.receiver || ''
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    submitHorseUpdate: (text, files) => {
      const {
        submitFeedUpdate
      } = ownProps

      const attachment = files

      // Construct data
      let data = processMediaPayload({
        attachment,
        text
      })

      submitHorseUpdate(data)
    },
    updateMessageSender: (data) => {
      return dispatch(updateMessageSender(data))
    },
    updateMessageReceiver: (data) => {
      return dispatch(updateMessageReceiver(data))
    }
  }
}

export default (connect(
  mapStateToProps,
  mapDispatchToProps
)(MemberDashboard))
