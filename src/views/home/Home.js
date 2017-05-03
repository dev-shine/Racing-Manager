/**
 *  @module react
 */
import React, { Component } from 'react'

/**
 * @module react-redux
 */
import { connect } from 'react-redux'

/**
 * @module ButtonContainer
 */
import ButtonContainer from 'containers/home/ButtonContainer'

/**
 * @module ParallaxHero
 */
import ParallaxHero from 'components/home/hero/ParallaxHero'

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
   * @returns { XML }
   */
  render () {
    return (
      <div className='home'>
        <ParallaxHero
          featuredImage='assets/images/home-hero.png'
        />
        <div className='container'>
          <div className='row'>
            <div className='col-md-6'>
              This is the homepage content.
              <ButtonContainer />
            </div>
            <div className='col-md-6'>
              <div className='row'>
                <div className='col-xs-4'>
                  <h1>Some sample text</h1>
                </div>
                <div className='col-xs-4'>
                  <h1>Some sample text</h1>
                </div>
                <div className='col-xs-4'>
                  <h1>Some sample text</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
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
