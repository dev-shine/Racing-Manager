import React from 'react'

import Header from 'containers/Header'
import Footer from 'components/footer'

const Test = props => {
  const { testVar } = props

  return (
    <div className='main-layout'>
      <Header />
      <div className='content'>
        {testVar}
      </div>
      <Footer />
    </div>
  )
}

export default Test
