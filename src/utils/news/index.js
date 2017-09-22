import update from 'immutability-helper'

import { constructStaticUrl } from 'utils/horseutils'

export const formatNews = (news) => {
  return news.map((item, index) => {
    return update(item, {
      thumbnailImage: {
        $set: constructStaticUrl(item.thumbnailImage)
      }
    })
  })
}
