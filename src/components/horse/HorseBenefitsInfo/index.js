import React from 'react'
import PropTypes from 'prop-types'

// import { Link } from 'react-router-dom'
import List from 'components/gui/List'

const HorseBenefitsInfo = props => {
  const { data } = props

  return (
    <div className='horse-benefits'>
      <div className='horse-header__small-title'>
        Benefits
      </div>
      <List items={data} />
    </div>
  )
}

HorseBenefitsInfo.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.string
  ).isRequired
}

HorseBenefitsInfo.defaultProps = {
  data: []
}

export default HorseBenefitsInfo

/*
<Link to='/' className='link--italic horse-header__read-more'>
  Read more...
</Link>
*/
