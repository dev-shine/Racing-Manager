/**
 * @module react
 */
import React from 'react'

/**
 * @module PropTypes
 */
import PropTypes from 'prop-types'

/**
 * @module classNames
 */
import classNames from 'classnames'

/**
 * @module CopyCard
 */
import CopyCard from 'components/home/CopyCard/CopyCard'

/**
 * BottomCtaSection component
 * @param { Object } props
 * @property { String } props.text
 * @returns { React.Component }
 */
const BottomCtaSection = props => {
  const { className } = props

  const _className = classNames('bottom-cta-section container', className)

  return (
    <div className={_className}>
      <div className="row">
        <div className="col-md-6">
          <img src="assets/images/video.png" alt="video"/>
        </div>
        <div className="col-md-6">
          <CopyCard
            headline="are you with us?">
            <p>“The Racing Manager could be the breath of fresh air that racing needs to bring a new, engaged audience into the sport we all love ”</p>
            <p className="home__bottom-quote-author micro"><b>- Eamon Wilmott</b>
              <br/>Non Exec Director, BHA | Managing Director, Horses First Racing</p>
            <br/><br/>
            <p>Sign up for free or try a demo account if there’s more you want to learn.</p>
          </CopyCard>
        </div>
      </div>
    </div>
  )
}

/**
 * Component props types
 * @type { Object }
 */
BottomCtaSection.propTypes = {
  className: PropTypes.string
}

/**
 * Default component props
 * @type { Object }
 */
BottomCtaSection.defaultProps = {
  className: ''
}

export default BottomCtaSection
