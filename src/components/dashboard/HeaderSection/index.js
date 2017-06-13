/**
 *  @module React
 */
import React, { Component } from 'react'

/**
 *  @module PropTypes
 */
import PropTypes from 'prop-types'

/**
 *  @module classNames
 */
import classNames from 'utils/classnames'

/**
 *  @module TextButton
 */
import TextButton from 'components/buttons/TextButton'

/**
 * dummy fn
 */
const noop = () => {}

/**
 *  @class
 *  @name HeaderSection
 *  @extends {Component}
 */
class HeaderSection extends Component {
  /**
   *  @constructor
   */
  constructor (props) {
    super(props)
  }

  render () {
    const {
      className,
      modifier,
      title,
      headerButtonText
    } = this.props

    /**
     *  Class names for the container
     *  @type {String}
     */
    const modifiedClassNames = classNames('dashboard-header', className, modifier)

    return (
      <div className={modifiedClassNames}>
        <div className='dashboard-header__heading row-no-margin dashboard-header__section'>
          <div className='col-sm-6 align-middle'>
            <h1>
              {title}
            </h1>
          </div>
          <div className='col-sm-6 align-middle'>
            <TextButton
              className='dashboard-header__header-button'
              onClick={noop}
              modifier='md'
              text={headerButtonText}/>
          </div>
        </div>
        <div className='dashboard-header__names-list dashboard-header__section'>
        </div>
      </div>
    )
  }
}

/**
 *  propTypes
 *  @type {Object}
 */
HeaderSection.propTypes = {
  title: PropTypes.string,
  headerButtonText: PropTypes.string
}

/**
 *  defaultProps
 *  @type {Object}
 */
HeaderSection.defaultProps = {
  title: 'your horses',
  headerButtonText: '+ add another horse'
}

/**
 *  @module HeaderSection
 */
export default HeaderSection
