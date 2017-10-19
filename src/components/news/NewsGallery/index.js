import React, { Component } from 'react'

import PropTypes from 'prop-types'

import NewsTile from 'components/news/NewsTile'

import TextButton from 'components/buttons/TextButton'

import { Block, Grid } from 'components/layouts/masonry'

import NewsPopupContainer from 'containers/News/NewsPopup'

class NewsGallery extends Component {
  constructor (props) {
    super(props)

    this.state = {
      id: null,
      showPopup: false,
      itemsShown: 4,
    }

    this.handleNewsTileClick = this.handleNewsTileClick.bind(this)
    this.showPopup = this.showPopup.bind(this)
    this.closePopup = this.closePopup.bind(this)
    this.showMore = this.showMore.bind(this)
  }

  showPopup (id) {
    if (!id) {
      return false
    }

    this.setState({
      id,
      showPopup: true
    })
  }

  closePopup () {
    this.setState({
      id: null,
      showPopup: false
    })
  }

  handleNewsTileClick (id) {
    this.showPopup(id)
  }

  showMore () {
    this.setState({itemsShown: this.state.itemsShown + 4});
  }

  render () {
    const {
      tiles
    } = this.props

    const {
      id,
      showPopup,
      itemsShown
    } = this.state

    let currentItem = 0
    let showTiles = []
    while (tiles[currentItem] && currentItem <= itemsShown - 1) {
      showTiles.push(tiles[currentItem])
      currentItem = currentItem + 1
    }

    return (
      <span>
        <Grid
          targetBlockWidth={265}
          center={false}
          maxColumns={4}>
          {
            showTiles.map((tile, index) => (
              <Block width={1} key={tile._id}>
                <NewsTile
                  id={tile._id}
                  rootPath={''}
                  text={tile.headline}
                  src={tile.thumbnailImage}
                  date={tile.timeStamp}
                  onClick={this.handleNewsTileClick}
                />
              </Block>
            ))
          }
        </Grid>
        <TextButton
          text='Load more'
          modifier='secondary'
          className='member-dashboard__more-btn'
          onClick={this.showMore}
        />
        <NewsPopupContainer
          isOpen={showPopup}
          onClick={this.closePopup}
          newsId={id} />
      </span>
    )
  }
}

NewsGallery.propTypes = {
  tiles: PropTypes.array.isRequired
}

export default NewsGallery
