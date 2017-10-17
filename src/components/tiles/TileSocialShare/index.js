import React from 'react'

import PropTypes from 'prop-types'

import Icon from 'components/icon'

import classNames from 'utils/classnames'

import { FadeIn } from 'components/animation'

import { stopPropagation } from 'utils/domutils'

import SocialShare from 'components/socialmedia/SocialShare'

const TileSocialShare = (props) => {
  const {
    className,
    modifier,
    shareText,
    onClose,
    show
  } = props

  const modifiedClassNames = classNames('tile-social-share', ['section-shadow--top', className], modifier)

  return (
    <FadeIn>
      {
      show ? (
        <div className={modifiedClassNames} onClick={stopPropagation}>
          <div className='tile-social-share__container'>
            <div className='tile-social-share__social-icons'>
              <SocialShare
                target='_blank'
                modifier='whatsapp'
                shareData={{
                  text: shareText
                }} />
            </div>
          </div>
          <div className='tile-social-share__close' onClick={onClose}>
            <Icon
              className='tile-social-share__close-icon'
              modifier='close'/>
          </div>
        </div>

      )
      : null
    }
    </FadeIn>
  )
}

TileSocialShare.defaultProps = {
  shareText: '',
  show: false
}

TileSocialShare.propTypes = {
  shareText: PropTypes.string,
  className: PropTypes.string,
  modifier: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]),
  onClose: PropTypes.func,
  show: PropTypes.bool
}

export default TileSocialShare