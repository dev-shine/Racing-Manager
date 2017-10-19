import React, { PureComponent } from 'react'

import TextButton from 'components/buttons/TextButton'

import TextCtaButton from 'components/buttons/TextCtaButton'

import CtaLink from 'components/links/CtaLink'

import CtaPanelCard from 'components/cards/CtaPanelCard'

import SocialShare from 'components/socialmedia/SocialShare'

import {
  whatsapp,
  twitter,
  email
} from 'texts/socialmedia'

import { FadeIn } from 'components/animation'

import classNames from 'utils/classnames'

class HorseCtaCard extends PureComponent {
  constructor (props) {
    super(props)

    this.state = {
      showLinks: false
    }

    // Bind fns
    this.showSocialLinks = this.showSocialLinks.bind(this)
    this.sendJoinRequest = this.sendJoinRequest.bind(this)
  }

  showSocialLinks () {
    this.setState({
      showLinks: true,
      joinRequestSent: false
    })
  }

  sendJoinRequest () {
    this.setState({joinRequestSent: true})
    this.props.requestToJoin()
  }

  render () {
    const {
      showLinks,
      joinRequestSent
    } = this.state

    const {
      url,
      isLoggedIn,
      data = {},
      mobile,
      requestJoin
    } = this.props

    const {
      slug
    } = data

    const modifiedClassNames = classNames('horse-cta-card', null, {
      mobile
    })

    return (
      <CtaPanelCard className={modifiedClassNames}>

        {isLoggedIn ? (
          <span onClick={this.sendJoinRequest}>
            <TextButton
              className='horse-cta-card__button'
              isDisabled={joinRequestSent}
              text={joinRequestSent ? 'Join request sent' : 'Request to join'}
              modifier='md'
            />
          </span>
        ) : (
          <CtaLink href={'/register/horse/' + slug} nativeLink>
            <TextButton
              text='Register to join'
              className='horse-cta-card__button'
              modifier='md'
            />
          </CtaLink>
        )}

        {/*<CtaLink href='/'>
          <TextButton
            text='Get in touch'
            className='horse-cta-card__button'
            modifier={['md', 'secondary']}
          />
        </CtaLink>*/}

        <FadeIn>
          {
            showLinks
            ? (
              <div className='horse-cta-card__social-links'>
                <div className='horse-cta-card__social-link'>
                  <SocialShare
                    target='_blank'
                    modifier='whatsapp'
                    className='horse-cta-card__social-icon'
                    shareData={{
                      text: whatsapp({url})
                    }} />
                </div>

                <div className='horse-cta-card__social-link'>
                  <SocialShare
                    target='_blank'
                    modifier='facebook'
                    className='horse-cta-card__social-icon'
                    shareData={{}} />
                </div>

                <div className='horse-cta-card__social-link'>
                  <SocialShare
                    target='_blank'
                    modifier='twitter'
                    className='horse-cta-card__social-icon'
                    shareData={{
                      title: twitter({url}),
                      url
                    }} />
                </div>

                <div className='horse-cta-card__social-link'>
                  <SocialShare
                    target='_blank'
                    modifier='email'
                    className='horse-cta-card__social-icon'
                    shareData={{...email({url})}} />
                </div>
              </div>
            )
            : (
              <TextCtaButton
                text={'share page'}
                className='horse-cta-card__share-text text-center uppercase'
                modifier={['italic']}
                onClick={this.showSocialLinks}
              />
            )
          }
        </FadeIn>
      </CtaPanelCard>
    )
  }
}

export default HorseCtaCard
