import React from 'react'

import PropTypes from 'prop-types'

import NewsTile from 'components/news/NewsTile'

import { Block, Grid } from 'components/layouts/masonry'

const NewsGallery = (props) => {
  const {
    tiles
  } = props

  return (
    <Grid
      targetBlockWidth={265}
      center={false}
      maxColumns={4}>
      {
        tiles.map((tile, index) => (
          <Block width={1} key={tile._id}>
            <NewsTile
              id={index}
              rootPath={''}
              text={tile.headline}
              src={tile.thumbnailImage}
              providerSrc={tile.thumbnailImage}
              date={tile.timeStamp}
            />
          </Block>
        ))
      }
    </Grid>
  )
}

NewsGallery.propTypes = {
  tiles: PropTypes.array.isRequired
}

export default NewsGallery
