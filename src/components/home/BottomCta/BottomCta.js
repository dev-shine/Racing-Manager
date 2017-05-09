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
 *  @module TextButton
 */
import TextButton from 'components/buttons/TextButton/TextButton'

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
        <div className="row relative">
          <div className="bottom-cta__video-container col-md-5 col-sm-10 col-sm-offset-1 col-md-offset-0">
            <img src="assets/images/video.png" alt="video"/>
          </div>
          <div className="col-md-6 col-md-offset-6 col-sm-10 col-sm-offset-1">
            <CopyCard
              headline="are you with us?">
              <p>“The Racing Manager could be the breath of fresh air that racing needs to bring a new, engaged audience into the sport we all love ”</p>
              <p className="bottom-cta__quote-author micro"><b>- Eamon Wilmott</b>
                <br/>Non Exec Director, BHA | Managing Director, Horses First Racing</p>
              <br/><br/>
              <p>Sign up for free or try a demo account if there’s more you want to learn.</p>
            </CopyCard>
            <div className="bottom-cta__buttons">
              <TextButton
                text="Register for FREE"
                className="bottom-cta__register-button"
                onClick={onRegisterClick}/>
              <TextButton
                text="Try a Demo"
                theme="secondary"
                onClick={onRegisterClick}/>
            </div>
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
