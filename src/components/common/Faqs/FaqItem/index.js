import React, { PureComponent } from 'react'

import PropTypes from 'prop-types'

import classNames from 'utils/classnames'

import Accordion from 'components/accordion/BaseAccordion'

class FaqItem extends PureComponent {
  constructor (props) {
    super(props)

    // Initial state
    this.state = {
      open: false
    }

    // Bind custom functions
    this.toggleFaq = this.toggleFaq.bind(this)
  }

  toggleFaq () {
    this.setState(({open}) => ({
      open: !open
    }))
  }

  render () {
    const {
      className,
      question,
      answer
    } = this.props

    const {
      open
    } = this.state

    const modifiedClassNames = classNames('faq-item', className)

    const modifiedQuestionClassNames = classNames('faq-item__question', '', {
      open
    })

    const modifiedSnippetClassNames = classNames('faq-item__snippet', '', {
      open
    })

    return (
      <li className={modifiedClassNames}>
        <h4 className={modifiedQuestionClassNames} onClick={this.toggleFaq}>
          {question}
        </h4>

        <Accordion isOpen={open} offset={30}>
          <p className={modifiedSnippetClassNames}>
            {answer}
          </p>
        </Accordion>
      </li>
    )
  }
}

FaqItem.propTypes = {
  className: PropTypes.string,
  question: PropTypes.string,
  answer: PropTypes.string
}

export default FaqItem
