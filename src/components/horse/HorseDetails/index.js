import React from 'react'
import { Link } from 'react-router-dom'

import { timestampToDate } from 'utils/dateutils'

const HorseDetails = props => {
  const { data } = props
  const {
    trainer = {},
    foalingDate,
    sire = {},
    dam = {},
  } = data

  return (
    <div>
      <div className='row'>
        <div className='horse-header__details-title col-xs-6'>
          Trainer
        </div>
        <div className='col-xs-6'>
          <Link to='/' className='horse-header__details-link'>
            {trainer.name || '-'}
          </Link>
        </div>
      </div>
      <div className='row'>
        <div className='horse-header__details-title col-xs-6'>
        Prev Trainers
      </div>
      <div className='col-xs-6'>
        <Link to='/' className='horse-header__details-link'>
        -
      </Link>
      </div>
      </div>
      <div className='row'>
        <div className='horse-header__details-title col-xs-6'>
          Breeder
        </div>
        <div className='col-xs-6'>
          -
        </div>
      </div>
      <div className='row'>
        <div className='horse-header__details-title col-xs-6'>
          Style
        </div>
        <div className='col-xs-6'>
          -
        </div>
      </div>
      <div className='row'>
        <div className='horse-header__details-title col-xs-6'>
          Foaling Date
        </div>
        <div className='col-xs-6'>
          {timestampToDate(foalingDate, 'D MMMM YYYY') || '-'}
        </div>
      </div>
      <div className='row'>
        <div className='horse-header__details-title col-xs-6'>
          Sire
        </div>
        <div className='col-xs-6'>
          <Link to='/' className='horse-header__details-link'>
            {sire.name || '-'}
          </Link>
        </div>
      </div>
      <div className='row'>
        <div className='horse-header__details-title col-xs-6'>Dam</div>
        <div className='col-xs-6'>
          <Link to='/' className='horse-header__details-link'>
            {dam.name || '-'}
          </Link>
        </div>
      </div>
      <div className='row'>
        <div className='horse-header__details-title col-xs-6'>Dam Sire</div>
        <div className='col-xs-6'>
          <Link to='/' className='horse-header__details-link'>
            {dam.sireName || '-'}
          </Link>
        </div>
      </div>
      <div className='row'>
        <div className='horse-header__details-title col-xs-6'>Racetrack Siblings</div>
        <div className='col-xs-6'>
          <Link to='/' className='horse-header__details-link'>
            -
          </Link>
        </div>
      </div>
      <div className='horse-header__details-prices row'>
        <div className='horse-header__details-title col-xs-6'>Prize Money</div>
        <div className='col-xs-6'>
          £-
        </div>
      </div>
      <div className='row'>
        <div className='horse-header__details-title col-xs-6'>Public Sales Price</div>
        <div className='col-xs-6'>
          £-
        </div>
      </div>
      <div className='row'>
        <div className='horse-header__details-title col-xs-6'>Current Value</div>
        <div className='col-xs-6'>
          £-
        </div>
      </div>
    </div>
  )
}

export default HorseDetails
