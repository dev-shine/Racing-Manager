import React from 'react'

import {
  CardView,
  CardFrame,
  CardContent
} from 'components/cards/FeaturedCard'

import BaseFluidPopup from 'components/popup/common/BasePopup'

const EditOverlay = (props) => {
  return (
    <CardView className='edit-overlay'>
      <CardFrame modifier='no-border'>
        <CardContent>
          <div className='edit-overlay__container'>
            <div className='edit-overlay__dashed-border'>
              dsdf
            </div>
          </div>
        </CardContent>
      </CardFrame>
    </CardView>
  )
}

export default BaseFluidPopup(EditOverlay)