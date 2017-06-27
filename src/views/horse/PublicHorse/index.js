import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import View from 'components/common/View'

import Separator from 'components/gui/Separator'
import Table from 'components/gui/Table'
import List from 'components/gui/List'
import TextButton from 'components/buttons/TextButton'

import HorseCard from 'components/cards/HorseCard'
import { constructStaticUrl } from 'utils/horseutils'

// mockup data
import {
  // syndicateMembers,
  tableStatistics,
  racePlans,
  horseValue,
  publicAvailabilityList,
  benefitsList,
  horse
} from 'data/horse'

class PublicHorse extends Component {
  render () {
    return (
      <View title='Public horse page'>
        <div className='public-horse'>
          <div className='public-horse__header'>
            header
          </div>
          <div className='container'>
            <div className='public-horse__table row'>
              <h1>
                Statistics
              </h1>
              <Separator modifier='blue' />
              <Table
                titles={tableStatistics.titles}
                data={tableStatistics.data}
              />
            </div>
            <div className='public-horse__paragraph-section row'>
              <div className='col-xs-12 col-md-7'>
                <h1>
                  {racePlans.title}
                </h1>
                <Separator modifier='blue' />
                <div>
                  {racePlans.text}
                </div>
              </div>
            </div>
          </div>
          <div className='public-horse__hero'>
            Hero here
          </div>
          <div className='public-horse__paragraph-section container'>
            <div className='col-xs-12 col-md-7'>
              <h1>
                {horseValue.title}
              </h1>
              <Separator modifier='blue' />
              <div>
                {horseValue.text}
              </div>
            </div>
          </div>
          <div className='public-horse__footer wave-bg section-shadow'>
            <div className='public-horse__footer-cont container'>
              <div className='public-horse__involvement col-xs-12 col-sm-6'>
                <h1>
                  Involvement
                </h1>
                <Separator modifier='grey' />
                <div>
                  <h4 className='uppercase'>
                    Benefits
                  </h4>
                  <List items={benefitsList} />
                </div>
                <p className='public-horse__updates-info'>
                  There are 352 updates associated with this horse.<br />
                  Request to join and get full access.
                </p>
                <div className='public-horse__availability-section'>
                  <h4 className='uppercase'>
                    Availability
                  </h4>
                  <List items={publicAvailabilityList} />
                </div>
                <Link to='/'>
                  <TextButton
                    text='Request to join'
                    modifier='md'
                    className='public-horse__join-button'
                  />
                </Link>
              </div>
              <div className='public-horse__horse-section col-xs-12 col-sm-6'>
                <HorseCard
                  className='public-horse__horse-card'
                  src={constructStaticUrl(horse.thumbnailImage)}
                  title={horse.name}
                  color={horse.syndColor}
                  subtitle={`${horse.age}yo ${horse.gender}`} // Needs to have the STYLE too!
                  stats={[{
                    name: 'runs',
                    value: horse.runs
                  }, {
                    name: 'wins',
                    value: horse.wins
                  }, {
                    name: 'places',
                    value: horse.places
                  }, {
                    name: 'OR',
                    value: '-'
                  }]}
                  info={[{
                    name: 'Trainer name',
                    value: horse.trainer.name
                  }, {
                    name: 'Syndicate name',
                    value: horse.syndName
                  }, {
                    name: 'Manager',
                    value: horse.owner.name
                  }, {
                    name: 'Ownership',
                    value: `${horse.shares.owned}/${horse.shares.total} shares`
                  }]}
                  extra={{
                    url: `/horse/${horse.slug}`
                  }}
                  bottomUrl={`/syndicate/${horse.syndSlug}`}
                />
              </div>
            </div>
          </div>
        </div>
      </View>
    )
  }
}

export default PublicHorse
