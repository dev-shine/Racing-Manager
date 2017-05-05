/**
 *  @module react
 */
import React, { Component } from 'react'

/**
 * @module react-redux
 */
import { connect } from 'react-redux'

/**
 * @module ParallaxHero
 */
import ParallaxHero from 'components/home/hero/ParallaxHero'

/**
 * @module Partners
 */
import Partners from 'components/home/Partners/Partners'

/**
 * @module CopySection
 */
import CopySection from 'components/home/CopySection/CopySection'

/**
 * Home view
 * @class
 * @extends Component
 */
export class Home extends Component {
  /**
   * @constructor
   * @param { Object } props
   */
  constructor (props) {
    super(props)
  }

  /**
   * Render method
   * @returns { React.Component }
   */
  render () {
    return (
      <div className='home'>
        <ParallaxHero
          featuredImage='assets/images/home-hero.png'>
          <div className='home__hero-content absolute-center'>
            <h1 className='home__hero-text'>We make setting up syndicates simple.</h1>
          </div>
          <p className='home__hero-tip micro semi-bold'>
            <span className='visible-md-up'>
              Use the arrow keys to change jockey. Click and drag to look around.
            </span>
            <span className='hidden-md-up'>
              Tap to change jockey.<br />Drag to look around.
            </span>
          </p>
        </ParallaxHero>
        <Partners />
        <div className='container'>
          <div className='home__section home__cta-section'>
            <div className="row">
              <div className="col-md-12">
                <h2 className="secondary-font home__cta-headline">The definitive platform for listing, managing and enjoying horse syndication</h2>
                <p>Our new technology allows horse trainers, syndicate managers and memebers to keep in touch more easily, manage their brands more effectively, and be more thoroughly involved in the excitement of horse racing at any time in any place than ever before.</p>
              </div>
            </div>
          </div>
        </div>
        <CopySection
          headline="take the reigns"
          featuredImage="images/copy/manager/1.png">
          <p>
            Managing a syndicate encompasses a lot and has never been easy, until now. The Racing Manager has a fully responsive site and app so you can:
            <br/>
            <br/>• Advertise for new and loyal members in one marketplace.
            <br/>• Set a customised webpage for your syndicate’s brand and horses.
            <br/>• Find all your accounting, messaging and management in one place.
          </p>
        </CopySection>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {}
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
