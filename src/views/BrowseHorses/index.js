/**
 *  @module React, Component
 */
import React, { Component } from 'react'

/**
 *  @module connect
 */
import { connect } from 'react-redux'

import View from 'components/common/View'
import { BROWSE_HORSES as title } from 'data/titles'

/**
 *  @module TitleHero
 */
import TitleHero from 'components/common/TitleHero'

/**
 *  @module HorseCardGallery
 */
import HorseCardGallery from 'components/cards/HorseCardGallery'

export class BrowseHorses extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <View title={title}>
        <div className='browse-horses'>
          <TitleHero/>
          <div className='container'>
            <HorseCardGallery
              data={this.props.horses}/>
          </div>
        </div>
      </View>
    )
  }
}

/**
 *  mapStateToProps
 *  @param  {Object} state
 *  @param  {Object} ownProps
 *  @return {Object}
 */
const mapStateToProps = (state, ownProps) => ({
  horses: [{'_id': '594a734c371c882d01addd23', 'name': 'ELATION (IRE)', 'age': '10', 'gender': 'filly', 'owner': {'name': 'HIGHCLERE', 'slug': 'highclere'}, 'trainer': {'name': 'Mark Johnston'}, 'featuredImage': '/uploads/horses/1498051404610/HERO_elation.jpg', 'thumbnailImage': '/uploads/horses/1498051404610/CARD_elation.jpg', 'slug': 'elation-(ire)', 'runs': 2, 'wins': 1, 'places': 0, 'shares': {'total': 26, 'owned': 6}}, {'_id': '594a734c371c882d01addd24', 'name': 'CONTENTMENT', 'age': '3', 'gender': 'filly', 'owner': {'name': 'HIGHCLERE', 'slug': 'highclere'}, 'trainer': {'name': 'William Haggas'}, 'style': 'flat', 'featuredImage': '/uploads/horses/1498051404601/HERO_contentment.jpg', 'thumbnailImage': '/uploads/horses/1498051404601/CARD_contentment.jpg', 'slug': 'contentment', 'runs': 5, 'wins': 1, 'places': 2, 'shares': {'total': 26, 'owned': 1}}, {'_id': '594a734c371c882d01addd24', 'name': 'CONTENTMENT', 'age': '3', 'gender': 'filly', 'owner': {'name': 'HIGHCLERE', 'slug': 'highclere'}, 'trainer': {'name': 'William Haggas'}, 'style': 'flat', 'featuredImage': '/uploads/horses/1498051404601/HERO_contentment.jpg', 'thumbnailImage': '/uploads/horses/1498051404601/CARD_contentment.jpg', 'slug': 'contentment', 'runs': 5, 'wins': 1, 'places': 2, 'shares': {'total': 26, 'owned': 1}}, {'_id': '594a734c371c882d01addd24', 'name': 'CONTENTMENT', 'age': '3', 'gender': 'filly', 'owner': {'name': 'HIGHCLERE', 'slug': 'highclere'}, 'trainer': {'name': 'William Haggas'}, 'style': 'flat', 'featuredImage': '/uploads/horses/1498051404601/HERO_contentment.jpg', 'thumbnailImage': '/uploads/horses/1498051404601/CARD_contentment.jpg', 'slug': 'contentment', 'runs': 5, 'wins': 1, 'places': 2, 'shares': {'total': 26, 'owned': 1}}, {'_id': '594a734c371c882d01addd24', 'name': 'CONTENTMENT', 'age': '3', 'gender': 'filly', 'owner': {'name': 'HIGHCLERE', 'slug': 'highclere'}, 'trainer': {'name': 'William Haggas'}, 'style': 'flat', 'featuredImage': '/uploads/horses/1498051404601/HERO_contentment.jpg', 'thumbnailImage': '/uploads/horses/1498051404601/CARD_contentment.jpg', 'slug': 'contentment', 'runs': 5, 'wins': 1, 'places': 2, 'shares': {'total': 26, 'owned': 1}}, {'_id': '594a734c371c882d01addd24', 'name': 'CONTENTMENT', 'age': '3', 'gender': 'filly', 'owner': {'name': 'HIGHCLERE', 'slug': 'highclere'}, 'trainer': {'name': 'William Haggas'}, 'style': 'flat', 'featuredImage': '/uploads/horses/1498051404601/HERO_contentment.jpg', 'thumbnailImage': '/uploads/horses/1498051404601/CARD_contentment.jpg', 'slug': 'contentment', 'runs': 5, 'wins': 1, 'places': 2, 'shares': {'total': 26, 'owned': 1}}, {'_id': '594a734c371c882d01addd24', 'name': 'CONTENTMENT', 'age': '3', 'gender': 'filly', 'owner': {'name': 'HIGHCLERE', 'slug': 'highclere'}, 'trainer': {'name': 'William Haggas'}, 'style': 'flat', 'featuredImage': '/uploads/horses/1498051404601/HERO_contentment.jpg', 'thumbnailImage': '/uploads/horses/1498051404601/CARD_contentment.jpg', 'slug': 'contentment', 'runs': 5, 'wins': 1, 'places': 2, 'shares': {'total': 26, 'owned': 1}}, {'_id': '594a734c371c882d01addd24', 'name': 'CONTENTMENT', 'age': '3', 'gender': 'filly', 'owner': {'name': 'HIGHCLERE', 'slug': 'highclere'}, 'trainer': {'name': 'William Haggas'}, 'style': 'flat', 'featuredImage': '/uploads/horses/1498051404601/HERO_contentment.jpg', 'thumbnailImage': '/uploads/horses/1498051404601/CARD_contentment.jpg', 'slug': 'contentment', 'runs': 5, 'wins': 1, 'places': 2, 'shares': {'total': 26, 'owned': 1}}]
})

/**
 *  mapDispatchToProps
 *  @param  {Function} dispatch
 *  @param  {Object} ownProps
 *  @return {Object}
 */
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
  }
}

export default (connect(
  mapStateToProps,
  mapDispatchToProps
)(BrowseHorses))
