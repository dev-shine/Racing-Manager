/**
 *  @module react
 */
import React, { Component } from 'react'

const headerContentClass = 'header__content'

export default [
  {
    paths: ['/'],
    getContent: () => {
      return <div className={headerContentClass} />
    }
  },
  {
    paths: ['/test'],
    getContent: () => {
      return <p>How awesome is that?</p>
    }
  }
]
