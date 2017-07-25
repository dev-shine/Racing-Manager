/**
 *  @module React, PureComponent
 */
import React, { PureComponent } from 'react'

/**
 *  @module PropTypes
 */
import PropTypes from 'prop-types'

/**
 *  @module ViewHeader
 */
import ViewHeader from 'components/common/ViewHeader'

/**
 *  @module View
 */
import View from 'components/routing/View'

/**
 *  @module Separator
 */
import Separator from 'components/gui/Separator'

/**
 *  @module TextButton
 */
import TextButton from 'components/buttons/TextButton'

import { Link } from 'react-router-dom'

class RegistrationVerification extends PureComponent {
  constructor (props) {
    super(props)
  }

  componentDidMount () {
    // Send to the verification api
  }

  render () {
    return (
      <View>
        <div className='registration-verification'>
          <ViewHeader
            title={`and they're off`} />
          <div className='container'>
            <div className='registration-verification__content-wrapper'>
              <div className='row'>
                <div className='col-xs-12 col-sm-8 col-md-6'>
                  <h2 className='regular uppercase registration-verification__title'>
                    welcome to the racing manager
                  </h2>
                  <Separator
                    modifier='blue' />
                  <p className='extra-light'>
                    Your account has been verified. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amaret democritea, legendum, inprobitas iucundum numquid attingere expetendam illustribus maledicta. Praetore inpendente voluptas evertitur probatus, viderer difficile aequo homo omne triari erigimur, accusator, nostrum splendore studiis inermis incidunt falsarum pedalis fortunae voluptatem dicendum.
                  </p>
                </div>
              </div>
              <div className='row'>
                <div className='col-xs-12 col-sm-8 col-md-6 registration-verification__bottom'>
                  <Link to='/browse-horses'>
                    <TextButton
                      className='registration-verification__cta-button'
                      text='browse horses' />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </View>
    )
  }
}

RegistrationVerification.propTypes = {
  email: PropTypes.string
}

export default RegistrationVerification
