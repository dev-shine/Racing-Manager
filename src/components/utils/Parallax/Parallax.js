import React, { PropTypes } from 'react'

export default class Parallax extends React.Component {
  /**
   * @constructor
   * @param props
   */
  constructor (props) {
    super(props)
    this.getPosition = this.getPosition.bind(this)
    this.scrollHandler = this.scrollHandler.bind(this)
  }

  componentWillMount () {
    this.setState({
      position: this.getPosition()
    })
  }

  componentDidMount () {
    this.startOffset = this.refs.node.offsetTop
    window.addEventListener('scroll', this.scrollHandler)
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.scrollHandler)
  }

  getPosition () {
    const { scope, offset, speed } = this.props
    const position = ((window.pageYOffset - this.startOffset) * speed)
    return Math.min(-Math.min(scope - offset, position), scope + offset)
  }

  scrollHandler () {
    this.setState({
      position: this.getPosition()
    })
  }

  render () {
    const style = {
      transform: `translate3d(0, ${this.state.position}px, 0)`
    }

    return React.cloneElement(this.props.children, {style, ref: 'node'})
  }
}

/**
 * Component props types
 * @type { Object }
 */
Parallax.propTypes = {
  children: PropTypes.node.isRequired,
  scope: PropTypes.number,
  speed: PropTypes.number,
  offset: PropTypes.number
}

/**
 * Default component props
 * @type { Object }
 */
Parallax.defaultProps = {
  speed: 1,
  scope: 100,
  offset: 0
}
