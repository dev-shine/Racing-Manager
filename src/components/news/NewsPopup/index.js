import React, { Component } from 'react'

import BasePopup from 'components/popup/BasePopup'

import classNames from 'utils/classnames'

import NewsPopupTile from 'components/news/NewsPopupTile'

import { textToNewLineReactComponent } from 'utils/stringutils'

class NewsPopup extends Component {
  constructor (props) {
    super(props)

    this.state = {
      newsTile: null
    }
  }

  componentDidMount () {
    this.checkNewsTile(this.props.id)
  }

  componentWillReceiveProps ({ id }) {
    if (id !== this.props.id) {
      this.checkNewsTile(id)
    }
  }

  checkNewsTile (id) {
    const {
      newsTiles
    } = this.props

    if (!id || !newsTiles || !newsTiles.length) {
      return this.setState({
        newsTile: null
      })
    }

    const newsTile = newsTiles.filter(({ _id }) => _id === id)

    if (newsTile.length) {
      this.setState({
        newsTile: newsTile[0]
      })
    }
  }

  render () {
    const {
      className
    } = this.props

    const {
      newsTile
    } = this.state

    const modifiedClassNames = classNames('news-popup', className)

    return (
      <div className={modifiedClassNames}>
        {
          newsTile
          ? (
              <NewsPopupTile
                name=''
                title={newsTile.slugline}
                date={newsTile.timeStamp}
                shareText={newsTile.content}
                text={textToNewLineReactComponent(newsTile.content)}
                src={newsTile.thumbnailImage}
                rootPath='' />
            )
          : null
        }
      </div>
    )
  }
}

export default BasePopup(NewsPopup)
