import React from 'react'
import PropTypes from 'prop-types'
import DocumentTitle from 'react-document-title'

import { SITE_NAME as prefix } from 'data/titles'

const View = props => {
  const { title, isPrefixed, children: Component } = props

  const prefixedTitle = `${prefix} - ${title}`
  const documentTitle = isPrefixed ? prefixedTitle : title

  return (
    <DocumentTitle title={documentTitle}>
      {Component}
    </DocumentTitle>
  )
}

View.propTypes = {
  title: PropTypes.string.isRequired,
  isPrefixed: PropTypes.bool,
  children: PropTypes.any
}

View.defaultProps = {
  title: '',
  isPrefixed: true
}

export default View
