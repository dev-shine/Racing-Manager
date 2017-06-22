import React from 'react'
import PropTypes from 'prop-types'

// import { Link } from 'react-router-dom'
import List from 'components/gui/List'

const HorseOwnershipInfo = props => {
  const { data } = props

  return (
    <div className='horse-ownership'>
      <div className='horse-header__small-title'>
        Ownership
      </div>
      <List items={data} />
    </div>
  )
}

HorseOwnershipInfo.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.string
  ).isRequired
}

HorseOwnershipInfo.defaultProps = {
  data: []
}

export default HorseOwnershipInfo

/*
<Link to='/' className='link--italic horse-header__read-more'>
  Read more...
</Link>
 */
