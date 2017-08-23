import React, { PureComponent } from 'react'

import TextButton from 'components/buttons/TextButton'

import TextCtaButton from 'components/buttons/TextCtaButton'

import CtaLink from 'components/links/CtaLink'

import CtaPanelCard from 'components/cards/CtaPanelCard'

import {
  requestToJoin
} from 'data/horse'

import { CSSTransitionGroup } from 'react-transition-group'

import SocialShare from 'components/socialmedia/SocialShare'

import {
  whatsapp,
  twitter,
  email
} from 'texts/socialmedia'

class HorseCtaCard extends PureComponent {
  constructor (props) {
    super(props)

    this.state = {
      showLinks: false
    }

    // Bind fns
    this.showSocialLinks = this.showSocialLinks.bind(this)
  }

  showSocialLinks () {
    this.setState({
      showLinks: true
    })
  }

  render () {
    const {
      showLinks
    } = this.state

    const {
      url
    } = this.props

    return (
      <CtaPanelCard className='horse-cta-card'>
        <CtaLink href={requestToJoin} target={'_blank'} nativeLink>
          <TextButton
            text='Request to join'
            className='horse-cta-card__button'
            modifier='md'
          />
        </CtaLink>

        <CtaLink href='/'>
          <TextButton
            text='Get in touch'
            className='horse-cta-card__button'
            modifier={['md', 'secondary']}
          />
        </CtaLink>

        <CSSTransitionGroup
          transitionName="fade-in"
          transitionAppearTimeout={400}
          transitionEnterTimeout={400}
          transitionLeaveTimeout={400}>
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
        </CSSTransitionGroup>
      </CtaPanelCard>
    )
  }
}

export default HorseCtaCard
