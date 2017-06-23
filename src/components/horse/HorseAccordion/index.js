import React, { Component } from 'react'
// import PropTypes from 'prop-types'

import Accordion from 'components/accordion/BaseAccordion'

class HorseAccordion extends Component {
  constructor (props) {
    super(props)

    this.state = {
      isOpen: false
    }

    this.handleToggle = this.handleToggle.bind(this)
  }

  handleToggle () {
    this.setState((state) => ({
      isOpen: !state.isOpen
    }))
  }

  render () {
    const { isOpen } = this.state

    return (
      <div className='horse-accordion'>
        <div className='horse-accordion__header' onClick={this.handleToggle}>
          <div className='horse-accordion__content container'>
            <div className='horse-accordion__title'>
              My title
            </div>
          </div>
        </div>
        <Accordion isOpen={isOpen}>
          123
        </Accordion>
      </div>
    )
  }
}

export default HorseAccordion
