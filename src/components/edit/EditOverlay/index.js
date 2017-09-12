import React from 'react'

import {
  CardView,
  CardFrame,
  CardContent
} from 'components/cards/FeaturedCard'

import BaseFluidPopup from 'components/popup/BaseFluidPopup'

import TextIconButton from 'components/buttons/TextIconButton'

const EditOverlay = (props) => {
  return (
    <CardView className='edit-overlay'>
      <CardFrame modifier='no-border'>
        <CardContent>
          <div className='edit-overlay__container'>
            <div className='edit-overlay__dashed-border'>
             djf
            </div>
            <div className='edit-overlay__button-group'>
              <TextIconButton
                iconModifier='check' />
              <TextIconButton
                modifier={['secondary', 'xs']}
                iconModifier='close' />
            </div>
          </div>
        </CardContent>
      </CardFrame>
    </CardView>
  )
}

export default BaseFluidPopup(EditOverlay)