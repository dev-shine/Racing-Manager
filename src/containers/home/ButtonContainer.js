/**
 *  @module react
 */
import React, { Component } from 'react'

/**
 * @module react-redux
 */
import { connect } from 'react-redux'

/**
 * @module SampleButton
 */
import Button from 'components/buttons/Button/Button'

/**
 * Button container
 * @class
 * @extends Component
 */
export class ButtonContainer extends Component {
  /**
   * @constructor
   * @param { Object } props
   */
  constructor (props) {
    super(props)
  }

  /**
   * Render method
   * @returns { XML }
   */
  render () {
    return (
      <div className='button-container'>
        <Button text='Sample button' />
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
)(ButtonContainer)
