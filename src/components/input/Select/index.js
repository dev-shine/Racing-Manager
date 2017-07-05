/**
 *  @module React
 */
import React, { Component } from 'react'

/**
 *  @module PropTypes
 */
import PropTypes from 'prop-types'

/**
*  @module InputLine
*/
import InputLine from 'components/input/InputLine'

/**
 *  @module classNames
 */
import classNames from 'utils/classnames'

/**
 *  @module enhanceWithClickOutside
 */
import enhanceWithClickOutside from 'react-click-outside'

/**
 *  @module CSSTransitionGroup
 */
import { CSSTransitionGroup } from 'react-transition-group'

class Option extends Component {
  constructor (props) {
    super(props)

    // Bind custom fn
    this.onOptionClick = this.onOptionClick.bind(this)
  }

  onOptionClick (e) {
    const {
      onClick,
      disabled,
      value
    } = this.props

    if (e.stopPropagation) {
      e.stopPropagation()
    }

    !disabled && onClick(value)
  }

  render () {
    const {
      children,
      disabled,
      className,
      selectedValue,
      value
    } = this.props

    const modifiedClassNames = classNames('option', className, {
      disabled,
      'active': selectedValue === value
    })

    return (
      <li className={modifiedClassNames} onClick={this.onOptionClick}>
        <h6 className='uppercase'>{children}</h6>
      </li>
    )
  }
}

/**
 *  @class
 *  @name Select
 *  @extends { Component }
 */
class Select extends Component {
  constructor (props) {
    super(props)

    // Initial state
    this.state = {
      open: false,
      value: ''
    }

    // Bind custom fn
    this.renderChildren = this.renderChildren.bind(this)
    this.onOptionClick = this.onOptionClick.bind(this)
    this.handleClickOutside = this.handleClickOutside.bind(this)
    this.openDropDown = this.openDropDown.bind(this)
    this.hideDropDown = this.hideDropDown.bind(this)
    this.toggleDropDown = this.toggleDropDown.bind(this)
  }

  componentWillMount () {
    // Set the default value from the props
    this.setState({
      value: this.props.defaultValue
    })
  }

  onOptionClick (value) {
    const {
      onChange
    } = this.props

    // Set the updated value to the state to render the new value.
    this.setState({
      value
    })

    // Hide the dropdown
    this.hideDropDown()

    // Type check and call onChange with the new value
    if (typeof onChange === 'function') {
      onChange(value)
    }
  }

  /**
   *  handleClickOutside
   *  @description If the user clicks outside of the select then hide.
   */
  handleClickOutside () {
    this.hideDropDown()
  }

  hideDropDown () {
    this.setState({
      open: false
    })
  }

  openDropDown () {
    this.setState({
      open: true
    })
  }

  toggleDropDown () {
    this.setState((state) => ({
      open: !state.open
    }))
  }

  /**
   *  renderChildren
   *  @description Will return children with additional props
   *  @return {Array}
   */
  renderChildren () {
    const {
      children
    } = this.props

    const {
      value
    } = this.state

    if (React.Children.count(children) >= 1) {
      return React.Children.map(children, (child, index) => {
        return React.cloneElement(child, {
          onClick: this.onOptionClick,
          selectedValue: value
        })
      })
    }

    return children
  }

  render () {
    const {
      className,
      modifier,
      error,
      showLine,
      mobileText
    } = this.props

    const {
      open,
      value
    } = this.state

    const modifiedClassNames = classNames('select', modifier)

    const modifiedSelectClassNames = classNames('select__select-input', className)

    const mobileTextClassNames = classNames('select__mobile-title', 'uppercase hidden-sm-up', {
      'active': open
    })

    /**
     *  hasError
     *  @const
     *  @type {Boolean}
     */
    const hasError = error && !!error.length

    return (
      <div className={modifiedClassNames} onClick={this.toggleDropDown}>
        <div className={modifiedSelectClassNames}>
          <h6 className='uppercase visible-sm-up'>{value}</h6>
          <h5 className={mobileTextClassNames}>{mobileText}</h5>
        </div>
        {
          showLine && <InputLine className='visible-sm-up' error={hasError} modifier={{active: open, 'left': true}} />
        }
        <div className='select__results section-shadow--bottom'>
          <CSSTransitionGroup
            transitionName="fade-in"
            transitionEnterTimeout={400}
            transitionLeaveTimeout={400}
          >
            {
              open && (
                <ul>
                  {this.renderChildren()}
                </ul>
              )
            }
          </CSSTransitionGroup>
        </div>
      </div>
    )
  }
}

Select.defaultProps = {
  placeholder: '',
  modifier: '',
  defaultValue: '',
  value: '',
  className: '',
  showLine: true
}

Select.propTypes = {
  value: PropTypes.string,
  error: PropTypes.array,
  placeholder: PropTypes.string,
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  modifier: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  name: PropTypes.string,
  defaultValue: PropTypes.string,
  handleChange: PropTypes.func,
  showLine: PropTypes.bool
}

/**
 *  @module Select
 */
export {
  Option
}

export default enhanceWithClickOutside(Select)
