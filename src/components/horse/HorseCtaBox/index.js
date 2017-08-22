import React, { PureComponent } from 'react'

import TextButton from 'components/buttons/TextButton'

import TextCtaButton from 'components/buttons/TextCtaButton'

import CtaLink from 'components/links/CtaLink'

import Icon from 'components/icon'

import {
  requestToJoin
} from 'data/horse'

import { CSSTransitionGroup } from 'react-transition-group'

class HorseCtaBox extends PureComponent {
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

    return (
      <div className='horse-cta-box section-shadow section-shadow--tile section-shadow--bottom'>
        <CtaLink href={requestToJoin} target={'_blank'} nativeLink>
          <TextButton
            text='Request to join'
            className='horse-cta-box__button'
            modifier='md'
          />
        </CtaLink>

        <CtaLink href='/'>
          <TextButton
            text='Get in touch'
            className='horse-cta-box__button'
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
              <div className='horse-cta-box__social-links'>
                <div className='hidden-sm-up'>
                  <div className='horse-cta-box__social-link'>
                    <Icon
                      className='horse-cta-box__social-icon'
                      modifier='whatsapp' />
                  </div>
                </div>

                <div className='horse-cta-box__social-link'>
                  <Icon
                    className='horse-cta-box__social-icon'
                    modifier='facebook' />
                </div>

                <div className='horse-cta-box__social-link'>
                  <Icon
                    className='horse-cta-box__social-icon'
                    modifier='twitter' />
                </div>

                <div className='horse-cta-box__social-link'>
                  <Icon
                    className='horse-cta-box__social-icon'
                    modifier='email' />
                </div>
              </div>
            )
            : (
              <TextCtaButton
                text={'share page'}
                className='horse-cta-box__share-text text-center uppercase'
                modifier={['italic']}
                onClick={this.showSocialLinks}
              />
            )
          }
        </CSSTransitionGroup>
      </div>
    )
  }
}

export default HorseCtaBox
