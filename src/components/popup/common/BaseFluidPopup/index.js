import React from 'react'
import PropTypes from 'prop-types'
import BodyStyle from 'components/common/BodyStyle'

import { FadeIn } from 'components/animation'

import Icon from 'components/icon'

import omit from 'utils/objectutils/omit'

const BaseFluidPopupHoc = WrappedComponent => {
  const BasePopup = props => {
    const { isOpen, onClick, breadcrumbText } = props

    const presentationProps = omit(props, ['isOpen', 'breadcrumbText'])

    return (
      <BodyStyle className={isOpen ? 'model-open' : ''}>
        <FadeIn>
          {
            isOpen && (
              <div className='fluid-popup'>
                <div className='fluid-popup__bg' />
                <div className='fluid-popup__wrapper'>
                  <div className='fluid-popup__breadcrumb cursor--pointer' onClick={onClick}>
                    <div className='container'>
                      <Icon
                        className='fluid-popup__breadcrumb-icon'
                        modifier='leftarrow' />
                      <h5 className='uppercase fluid-popup__breadcrumb-text'>
                        {breadcrumbText}
                      </h5>
                    </div>
                  </div>
                  <WrappedComponent {...presentationProps} />
                </div>
              </div>
            )
          }
        </FadeIn>
      </BodyStyle>
    )
  }

  BasePopup.propTypes = {
    isOpen: PropTypes.bool,
    onClick: PropTypes.func,
    breadcrumbText: PropTypes.string
  }

  BasePopup.defaultProps = {
    isOpen: false,
    breadcrumbText: 'Back'
  }

  return BasePopup
}

export default BaseFluidPopupHoc
