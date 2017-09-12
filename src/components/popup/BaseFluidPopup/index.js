import React from 'react'
import PropTypes from 'prop-types'
import BodyStyle from 'components/common/BodyStyle'

import { FadeIn } from 'components/animation'

import omit from 'utils/objectutils/omit'

const BaseFluidPopupHoc = WrappedComponent => {
  const BasePopup = props => {
    const { isOpen } = props

    const presentationProps = omit(props, ['isOpen'])

    return (
      <BodyStyle className={isOpen ? 'model-open' : ''}>
        <FadeIn>
          {
            isOpen && (
              <div className='fluid-popup'>
                <div className='fluid-popup__bg' />
                <div className='fluid-popup__wrapper'>
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
    isOpen: PropTypes.bool
  }

  BasePopup.defaultProps = {
    isOpen: false
  }

  return BasePopup
}

export default BaseFluidPopupHoc
