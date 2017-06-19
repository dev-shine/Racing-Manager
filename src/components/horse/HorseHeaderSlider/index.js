import React, { Component } from 'react'

import Carousel from 'components/carousel'
import CarouselPaginationButton from 'components/buttons/CarouselPaginationButton'

class HorseHeaderSlider extends Component {
  constructor (props) {
    super(props)

    this.state = {
      activeSlide: 0
    }

    this.handleSlideChange = this.handleSlideChange.bind(this)
  }

  handleSlideChange (instance) {
    this.setState({
      activeSlide: instance.activeIndex
    })
  }

  render () {
    const { activeSlide } = this.state
    const { children, className } = this.props
    const slideCount = children.length

    return (
      <div>
        <Carousel
          slideClassName={className}
          onSlideChangeStart={this.handleSlideChange}
        >
          {children}
        </Carousel>
        <CarouselPaginationButton
          length={slideCount}
          activeIndex={activeSlide}
          className='horse-header__pagination'
        />
      </div>
    )
  }
}

export default HorseHeaderSlider
