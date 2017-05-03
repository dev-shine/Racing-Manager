/**
 *  @module react
 */
import React, { Component } from 'react'

/**
 * @module react-redux
 */
import { connect } from 'react-redux'

/**
 * @module Header
 */
import Header from 'containers/header/Header'

/**
 * @module Footer
 */
import Footer from 'components/footer/Footer'

/**
 * Main layout
 * @class
 * @extends Component
 */
export class Main extends Component {
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
      <div className='main-layout'>
        <Header />
        <div className='content'>
          { this.props.children }
        </div>
        <Footer />
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
)(Main)
