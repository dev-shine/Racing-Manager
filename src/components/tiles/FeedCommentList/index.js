import React from 'react'

import classNames from 'utils/classnames'

import FeedComment from 'components/tiles/FeedComment'

import PropTypes from 'prop-types'

const FeedCommentList = (props) => {
  const {
    className,
    modifier,
    comments
  } = props

  const modifiedClassNames = classNames('feed-comment-list', ['no-list-style', className], modifier)

  return (
    <ul className={modifiedClassNames}>
      {
        comments.map(({author, text, timeStamp}, index) => {
          return (
            <li key={index}>
              <FeedComment
                name={author}
                date={timeStamp}
                text={text} />
            </li>
          )
        })
      }
    </ul>
  )
}

FeedCommentList.propTypes = {
  className: PropTypes.string,
  modifier: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.object
  ]),
  comments: PropTypes.array
}

export default FeedCommentList
