import React from 'react'

import Separator from 'components/gui/Separator'
import Table from 'components/gui/Table'
import TextButton from 'components/buttons/TextButton'

import HorseAccordion from 'components/horse/HorseAccordion'
import HorseTeamMember from 'components/horse/HorseTeamMember'

const members = [
  {
    image: '',
    name: 'Harry Herbert',
    role: 'Chairman & MD',
    description: 'I have managed syndicates for 30 years, as have my family for 3 generations.'
  },
  {
    image: '',
    name: 'John Warren',
    role: 'Director',
    description: 'I have managed syndicates for 30 years, as have my family for 3 generations.'
  },
  {
    image: '',
    name: 'Alex Smith',
    role: 'Director',
    description: 'I have managed syndicates for 30 years, as have my family for 3 generations.'
  },
  {
    image: '',
    name: 'Alison Begley',
    role: 'Director',
    description: 'I have managed syndicates for 30 years, as have my family for 3 generations.'
  },
  {
    image: '',
    name: 'Harry Herbert',
    role: 'Chairman & MD',
    description: 'I have managed syndicates for 30 years, as have my family for 3 generations.'
  },
  {
    image: '',
    name: 'John Warren',
    role: 'Director',
    description: 'I have managed syndicates for 30 years, as have my family for 3 generations.'
  },
  {
    image: '',
    name: 'Alex Smith',
    role: 'Director',
    description: 'I have managed syndicates for 30 years, as have my family for 3 generations.'
  },
  {
    image: '',
    name: 'Alison Begley',
    role: 'Director',
    description: 'I have managed syndicates for 30 years, as have my family for 3 generations.'
  }
]

const statistics = {
  titles: [
    'Code',
    'Runs',
    'Wins',
    'Places',
    'ISP P/L',
    'Best TFR',
  ],
  data: [
    [
      'Hurdle',
      18,
      1,
      7,
      -13.5,
      109
    ],
    [
      'Bumper',
      4,
      1,
      2,
      -2.6,
      87
    ]
  ]
}

const entries = {
  titles: [
    'Date',
    'Time',
    'Course',
    'Race',
    'DIS'
  ],
  data: [
    [
      '03/06/17',
      18,
      'HEX',
      7,
      -13.5
    ],
    [
      '03/06/17',
      18,
      'HEX',
      7,
      -13.5
    ]
  ]
}

const results = {
  titles: [
    'Date',
    'Course',
    'Result',
    'Btn',
    'Type',
    'OR',
    'Dis',
    'Going',
    'EQ',
    'Jockey',
    'ISP',
    'BSP',
    'IP HI/LO',
    'IPS',
    'FS%',
    'TGIF',
    'TFR'
  ],
  data: [
    [
      '15 May 07',
      'Hun',
      '1/13',
      2.50,
      'Chase',
      'N',
      '20.5f',
      'Good',
      '-',
      'Felix de Giles (5)',
      '8/11f',
      '-',
      '-',
      '-',
      '-',
      '-',
      '-',
    ],
    [
      '15 May 07',
      'Hun',
      '1/13',
      2.50,
      'Chase',
      'N',
      '20.5f',
      'Good',
      '-',
      'Felix de Giles (5)',
      '8/11f',
      '-',
      '-',
      '-',
      '-',
      '-',
      '-',
    ],
  ]
}

const HorseAccordions = () => {
  return (
    <div className='horse-accordions'>
      <HorseAccordion title='The Team'>
        <div className='horse-accordions__content container'>
          {
            members.map((member, index) => (
              <div key={index} className='col-xs-6 col-sm-3 col-md-2'>
                <HorseTeamMember
                  image={member.image}
                  name={member.name}
                  role={member.role}
                  description={member.description}
                  className='horse-accordions__member'
                />
              </div>
            ))
          }
        </div>
      </HorseAccordion>
      <HorseAccordion title='Racing History'>
        <div className='horse-accordions__content container'>
          <h1>
            Statistics
          </h1>
          <Separator modifier='blue' />
          <Table
            titles={statistics.titles}
            data={statistics.data}
          />
          <h1 className='horse-accordions__middle-title'>
            Future entries
          </h1>
          <Separator modifier='blue' />
          <Table
            titles={entries.titles}
            data={entries.data}
          />
          <h1 className='horse-accordions__middle-title'>
            Results
          </h1>
          <Separator modifier='blue' />
          <Table
            titles={results.titles}
            data={results.data}
          />
          <TextButton
            text='Load more'
            modifier={['md', 'secondary']}
            className='horse-accordions__load-more'
            onClick={() => {}}
          />
        </div>
      </HorseAccordion>
      <HorseAccordion title='Racing plans'>
        <div className='horse-accordions__content container'>
          <div className='col-xs-12 col-md-7'>
            <h1>
              Race plans
            </h1>
            <Separator modifier='blue' />
            <div>
              <p>
                The race plans for this filly will be determined by her level of ability shown at home and on the course in 2017.  On breeding she is sprint bred, but she has already shown signs of stamina and we expect she could be running over a mile as a 3YO.
              </p>
              <p>
                With this filly having already run enough times to qualify for nursery handicaps, she will continue in this vein through 2017 - eventually into full handicap company, or if she proves to be good enough, possibly better company.  She showed at Chelmsford in November 2016 when finishing second on her handicap debut that she has ability and has progressed with every run to date.
              </p>
              <p>
                This filly will be stabled in Lambourn, Berkshire throughout her 3YO career and will therefore be racing in the South at tracks such as Sandown, Windsor, Kempton, Lingfield, Newmarket, Ascot, Bath and others in the Midlands.
              </p>
              <p>
                There are plenty of races available for her right from the start of the season.  We will assess this filly's progress and if Seamus believes she has the right level of ability she may get entries for some of the more prestigious handicap races in the racing calendar.
              </p>
              <p>
                Your online Racehorse Manager will provide full details of all developments in terms of race planning as the season progresses.
              </p>
            </div>
            <h1 className='horse-accordions__middle-title'>
              Horse value
            </h1>
            <Separator modifier='blue' />
            <div>
              <p>
                We expect to get 3-6 runs and possibly more from this racehorse in her share period, however, you should expect periods of no racing as a result of recuperation from injury or training setbacks. This share period starts April 1st 2017 and runs through the summer turf season, finishing on November 1st 2017.
              </p>
              <p>
                During the season the horse may be rested or have time away from the track to recover and it is quite normal for a racehorse to have periods of 3-6 weeks rest between races. Young horses are particularly susceptible to sore shins, bone chips and growing pains, and can need a greater time to recover between races.
              </p>
              <p>
                For this filly we offer the following guarantee:  If due to injury or retirement, this filly's season is cut short and will not race again, and she has not raced at least twice, we will replace her with a similar horse for the remainder of the 2017 turf season. Please note that we are unable to pay prizemoney on any replacements and the replacement will be a horse of our own choosing.
              </p>
              <p>
                As a shareholder you must understand that we cannot guarantee your horses performance, a specific volume of runs (beyond our minimum guarantee) or that runs will be evenly spaced throughout the share period.
              </p>
              <p>
                This is the chance you take when owning any racehorse and participating in this ownership experience.  If you will be disappointed with only 2-3 runs from your racehorse during the season, then please DO NOT PARTICIPATE IN THIS OR ANY OTHER RACEHORSE.
              </p>
              <p>
                We believe in being crystal clear with our shareholders - any participation in racehorse ownership is high risk, and we are unable to make any refunds because of share periods which finish early due to injury or retirement - as training and livery fees for the horse still remain whether they are racing or not.  This is the chance all shareholders take, as we do ourselves, when participating in the ownership of a racehorse.
              </p>
            </div>
          </div>
        </div>
      </HorseAccordion>
    </div>
  )
}

export default HorseAccordions
