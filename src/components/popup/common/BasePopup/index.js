import React from 'react'
import PropTypes from 'prop-types'
import BodyStyle from 'components/common/BodyStyle'

import CloseButton from 'components/buttons/CloseButton'
import { CSSTransitionGroup } from 'react-transition-group'

const BasePopupHoc = WrappedComponent => {
  const BasePopup = props => {
    const { isOpen, onClick } = props

    return (
      <BodyStyle className={isOpen ? 'model-open' : ''}>
        <CSSTransitionGroup
          transitionName="fade-in"
          transitionEnterTimeout={400}
          transitionLeaveTimeout={400}
        >
          {
            isOpen && (
              <div className='popup'>
                <div className='popup__bg' onClick={onClick} />
                <div className='popup__wrapper col-xs-12 col-sm-10 col-sm-push-1 col-md-8 col-md-push-2 col-lg-6 col-lg-push-3'>
                  <div className='popup__container section-shadow--tile'>
                    <CloseButton className='popup__closebutton' onClick={onClick} />
                    <WrappedComponent {...props} />
                  </div>
                </div>
              </div>
            )
          }
        </CSSTransitionGroup>
      </BodyStyle>
    )
  }

  BasePopup.propTypes = {
    isOpen: PropTypes.bool,
    onClick: PropTypes.func
  }

  BasePopup.defaultProps = {
    isOpen: false
  }

  return BasePopup
}

export default BasePopupHoc
