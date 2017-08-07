import React from 'react'

import PropTypes from 'prop-types'

import TileHeader from 'components/tiles/common/TileHeader'

import Separator from 'components/gui/Separator'

const FeedComment = (props) => {
  const {
    name,
    date,
    text
  } = props

  return (
    <div className='feed-comment'>
      <div className='feed-comment__header'>
        <TileHeader
          name={name}
          date={date} />
      </div>
      <div className='feed-comment__body'>
        <p className='feed-comment__text small'>
          {text}
        </p>
      </div>
      <div className='feed-comment__footer'>
        <Separator modifier='grey' />
      </div>
    </div>
  )
}

FeedComment.propTypes = {
  name: PropTypes.string,
  date: PropTypes.string,
  text: PropTypes.string
}

export default FeedComment
