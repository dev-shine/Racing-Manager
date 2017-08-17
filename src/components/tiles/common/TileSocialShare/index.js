import React from 'react'

import PropTypes from 'prop-types'

import Icon from 'components/icon'

import classNames from 'utils/classnames'

const TileSocialShare = (props) => {
  const {
    className,
    modifier,
    shareText,
    onClose
  } = props

  const modifiedClassNames = classNames('tile-social-share', ['section-shadow--top', className], modifier)

  const stopPropagation = (e) => {
    if (e && e.stopPropagation) {
      e.stopPropagation()
    }
  }

  return (
    <div className={modifiedClassNames}>
      <div className='tile-social-share__container'>
        <div className='tile-social-share__social-icons'>
          <a href={`whatsapp://send?text=${encodeURIComponent(shareText)}`} onClick={stopPropagation}>
            <Icon
              className='tile-social-share__icon'
              modifier='whatsapp' />
          </a>
        </div>
      </div>
      <div className='tile-social-share__close' onClick={(e) => { stopPropagation(e); onClose && onClose() }}>
        <Icon
          className='tile-social-share__close-icon'
          modifier='close'/>
      </div>
    </div>
  )
}

TileSocialShare.defaultProps = {
  shareText: ''
}

TileSocialShare.propTypes = {
  shareText: PropTypes.string,
  className: PropTypes.string,
  modifier: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  onClose: PropTypes.func
}

export default TileSocialShare
