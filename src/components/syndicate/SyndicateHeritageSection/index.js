import React, { PureComponent } from 'react'

import classNames from 'utils/classnames'

import PropTypes from 'prop-types'

import TitleDescriptionSection from 'components/common/TitleDescriptionSection'

class SyndicateHeritageSection extends PureComponent {
  constructor (props) {
    super(props)
  }

  render () {
    const {
      className
    } = this.props

    const modifiedClassNames = classNames('syndicate-heritage', className)

    return (
      <div className={modifiedClassNames}>
        <TitleDescriptionSection
          title='our heritage'
          description='In the course of running Highclere, we have had the great fortune of running our horses across the country, winning multiple trophies with a fantastic team. We measure our success, not only on the performance of our horses, but equally through the enjoyment and experience we deliver to our owners.'
          colorModifier='blue' />
        {/*
          Add in timeline component when ready
        */}
      </div>
    )
  }
}

SyndicateHeritageSection.propTypes = {
  className: PropTypes.string
}

export default SyndicateHeritageSection
