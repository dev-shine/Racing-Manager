/**
 * @module React, Component
 */
import React, { PureComponent } from 'react'

/**
 *  @module TextButton
 */
import TextButton from 'components/buttons/TextButton'

/**
 *  @module PropTypes
 */
import PropTypes from 'prop-types'

/**
 *  @module omit
 */
import omit from 'utils/objectutils/omit'

/**
 *  @class
 *  @name ToggleButton
 *  @extends { Component }
 */
class ToggleButton extends PureComponent {
  constructor (props) {
    super(props)

    // Initial state
    this.state = {
      active: false
    }

    // Bind custom fn
    this.toggleActive = this.toggleActive.bind(this)
    this.setInitialActiveState = this.setInitialActiveState.bind(this)
    this.fireOnChange = this.fireOnChange.bind(this)
  }

  componentWillMount () {
    this.setInitialActiveState()
  }

  setInitialActiveState () {
    this.setState({
      active: this.props.active
    })
  }

  componentWillReceiveProps (nextProps, nextState) {
    if (nextProps.active !== this.props.active && nextProps.active !== this.state.active) {
      this.toggleActive()
    }
  }

  toggleActive () {
    this.setState((state) => ({
      active: !state.active
    }), () => {
      this.fireOnChange()
    })
  }

  /**
   *  fireOnChange
   *  @description Will fire the onchange event with the new active state
   */
  fireOnChange () {
    const {
      onChange
    } = this.props

    onChange && onChange(this.state.active)
  }

  render () {
    const {
      active
    } = this.state

    // Remove the onChange, onClick and active props to favour the local states.
    const textButtonProps = omit(this.props, ['onClick', 'onChange', 'active'])

    return (
      <TextButton
        active={active}
        onClick={this.toggleActive}
        {...textButtonProps} />
    )
  }
}

ToggleButton.propTypes = {
  active: PropTypes.bool
}

ToggleButton.defaultProps = {
  active: false
}

/**
 *  @module ToggleButton
 */
export default ToggleButton
