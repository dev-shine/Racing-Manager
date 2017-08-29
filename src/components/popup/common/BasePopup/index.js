import React from 'react'
import PropTypes from 'prop-types'
import BodyStyle from 'components/common/BodyStyle'

import CloseButton from 'components/buttons/CloseButton'
import { CSSTransitionGroup } from 'react-transition-group'

import classNames from 'utils/classnames'

const BasePopupHoc = WrappedComponent => {
  const BasePopup = props => {
    const { isOpen, onClick, isFluid } = props

    const modifiedClassNames = classNames('popup__wrapper', isFluid ? '' : 'col-xs-12 col-sm-10 col-sm-push-1 col-md-8 col-md-push-2 col-lg-6 col-lg-push-3')

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
                <div className={modifiedClassNames}>
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
    onClick: PropTypes.func,
    isFluid: PropTypes.bool
  }

  BasePopup.defaultProps = {
    isOpen: false,
    isFluid: false
  }

  return BasePopup
}

export default BasePopupHoc
