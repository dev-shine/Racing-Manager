import React from 'react'

import {
  CardView,
  CardFrame,
  CardContent
} from 'components/cards/FeaturedCard'

import BaseFluidPopup from 'components/popup/common/BaseFluidPopup'

const EditOverlay = (props) => {
  return (
    <CardView>
      <CardFrame>
        <CardContent>
          dsdf
        </CardContent>
      </CardFrame>
    </CardView>
  )
}

export default BaseFluidPopup(EditOverlay)