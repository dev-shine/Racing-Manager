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
 *  @module PrimaryButton
 */
import PrimaryButton from 'components/buttons/PrimaryButton/PrimaryButton'

/**
 * BottomCta component
 * @param { Object } props
 * @property { String } props.text
 * @returns { React.Component }
 */
const BottomCta = props => {
  const { className, onRegisterClick } = props

  const _className = classNames('bottom-cta', className)

  return (
    <div className={_className}>
      <div className="bottom-cta__wave-line wave-bg"></div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-5">
            <img src="assets/images/video.png" alt="video"/>
          </div>
          <div className="col-lg-6 col-md-7">
            <CopyCard
              headline="are you with us?">
              <p>“The Racing Manager could be the breath of fresh air that racing needs to bring a new, engaged audience into the sport we all love ”</p>
              <p className="bottom-cta__quote-author micro"><b>- Eamon Wilmott</b>
                <br/>Non Exec Director, BHA | Managing Director, Horses First Racing</p>
              <br/><br/>
              <p>Sign up for free or try a demo account if there’s more you want to learn.</p>
            </CopyCard>
            <PrimaryButton
              text="Register for FREE"
              onClick={onRegisterClick}/>
          </div>
        </div>
      </div>
    </div>
  )
}

/**
 * Component props types
 * @type { Object }
 */
BottomCta.propTypes = {
  className: PropTypes.string
}

/**
 * Default component props
 * @type { Object }
 */
BottomCta.defaultProps = {
  className: ''
}

export default BottomCta
