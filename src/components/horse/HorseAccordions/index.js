import React from 'react'

import Separator from 'components/gui/Separator'
import Table from 'components/gui/Table'
import TextButton from 'components/buttons/TextButton'

import HorseAccordion from 'components/horse/HorseAccordion'
import HorseTeamMember from 'components/horse/HorseTeamMember'
import HorseParagraphSection from 'components/horse/HorseParagraphSection'

// mockup data
import {
  syndicateMembers,
  tableStatistics,
  tableEntries,
  tableResults,
  racePlans,
  horseValue,
} from 'data/horse'

const HorseAccordions = () => {
  return (
    <div className='horse-accordions'>
      <HorseAccordion title='The Team'>
        <div className='horse-accordions__content container'>
          {
            syndicateMembers.map((member, index) => (
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
          <Table {...tableStatistics} />
          <h1 className='horse-accordions__middle-title'>
            Future entries
          </h1>
          <Separator modifier='blue' />
          <Table {...tableEntries} />
          <h1 className='horse-accordions__middle-title'>
            Results
          </h1>
          <Separator modifier='blue' />
          <Table {...tableResults} />
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
            <HorseParagraphSection title={racePlans.title}>
              {racePlans.text}
            </HorseParagraphSection>
            <HorseParagraphSection title={horseValue.title}>
              {horseValue.text}
            </HorseParagraphSection>
          </div>
        </div>
      </HorseAccordion>
    </div>
  )
}

export default HorseAccordions
