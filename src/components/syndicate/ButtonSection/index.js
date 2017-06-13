import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'utils/classnames'

import baseTile from 'components/tiles/common/BaseTile'
import TextButton from 'components/buttons/TextButton'
import { Link } from 'react-router-dom'

class ButtonSection extends Component {
  constructor (props) {
    super(props)

    this.handleRequestToJoin = this.handleRequestToJoin.bind(this)
    this.handleTalkToManager = this.handleTalkToManager.bind(this)
  }

  handleRequestToJoin () {
  }

  handleTalkToManager () {
  }

  render () {
    const { className, modifier } = this.props

    const modifiedClassNames = classNames('button-section', className, modifier)

    return (
      <div className={modifiedClassNames}>
        <TextButton
          text='Request to join'
          className='button-section__button'
          onClick={this.handleRequestToJoin}
        />
        <TextButton
          text='Talk to the manager'
          modifier='secondary'
          className='button-section__button'
          onClick={this.handleTalkToManager}
        />
        <Link to='/' className='button-section__link'>
          Save it for later
        </Link>
      </div>
    )
  }
}

ButtonSection.propTypes = {
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  modifier: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
}

ButtonSection.defaultProps = {
  className: '',
  modifier: '',
}

export default baseTile(ButtonSection)
