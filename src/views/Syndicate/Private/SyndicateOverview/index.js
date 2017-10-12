import React, { Component } from 'react'

import SyndicateView from 'views/Syndicate/View'

import FeedGallery from 'components/feed/FeedGallery'

import SyndicateHero from 'components/syndicate/SyndicateHero'
import SyndicateSplitSection from 'components/syndicate/SyndicateSplitSection'
import SyndicateAbout from 'components/syndicate/SyndicateAbout'
import SyndicateInvolvement from 'components/syndicate/SyndicateInvolvement'
import SyndicateCtaCard from 'components/syndicate/SyndicateCtaCard'
import SyndicateBenefits from 'components/syndicate/SyndicateBenefits'
import SyndicateIntroSection from 'components/syndicate/SyndicateIntroSection'
import SyndicateHorseCarousel from 'components/syndicate/SyndicateHorseCarousel'
import SyndicateHeritageSection from 'components/syndicate/SyndicateHeritageSection'
import SyndicateFaqPopup from 'components/syndicate/SyndicateFaqPopup'

import HorseMemberCarousel from 'components/horse/HorseMemberCarousel'
import HorseParallaxContent from 'components/horse/HorseParallaxContent'

import TitleDescriptionSection from 'components/common/TitleDescriptionSection'

import {
  benefits as syndicateBenefits,
  benefitsDescription as syndicateBenefitsDescription,
  syndicateUpperHero,
  syndicateLowerHero,
  faqs
} from 'data/syndicate'

import {multilineTextToJSX} from 'utils/textutils'

// mockup data
import {
  syndicateMembers,
  trainerMembers,
} from 'data/horse'

import {
  Route
} from 'react-router-dom'

/**
 *  Edit
 */
import FormSubmissionEditContainer from 'containers/ManagerEdit/FormSubmissionEditContainer'

import SyndicateFaqs from 'components/syndicate/SyndicateFaqs'
import ContactForm from 'components/forms/Contact'
import FullWidthSplitSection from 'components/common/FullWidthSplitSection'

import {submitSyndicateData} from 'actions/syndicate'

import TextEditContainer from 'containers/ManagerEdit/TextEditContainer'

import ImageEditContainer from 'containers/ManagerEdit/ImageEditContainer'

// Mock
const EMPTY_OBJ = {}
const NOOP = () => {}

export class SyndicateOverview extends Component {
  constructor (props) {
    super(props)

    this.state = {
      openFaq: false
    }

    this.toggleFaq = this.toggleFaq.bind(this)
  }

  toggleFaq () {
    this.setState(({openFaq}) => ({
      openFaq: !openFaq
    }))
  }

  render () {
    const {
      data
    } = this.props

    const {
      openFaq
    } = this.state

    const {
      name,
      owner,
      description,
      messages,
      horsesHeadline,
      horsesText,
      heritage,
      trainersHeadline,
      trainersText,
      horses
    } = data

    return (
      <div className='private-syndicate'>
        <ImageEditContainer
          title='Image requirements'
          description='Images must be a minimum of 1200px wide, 800px tall and be no more than 2mb in size. The file format should be either PNG or JPEG, and importantly must be either your own image or one that you have been given permission to use. Most landscape smartphone camera photos will fit these criteria.'
          data={data}
          editLabel='update image'
          dataKey='featuredImage'
          submitAction={submitSyndicateData}>
          {
            ({ value }) => {
              return (
                <SyndicateHero
                  data={data}
                  owner={owner}
                  name={name} />
              )
            }
          }
        </ImageEditContainer>
        <div className='private-syndicate__header'>
          <SyndicateSplitSection
            leftComponent={
              <TextEditContainer
                title='About the syndicate'
                data={data}
                placeholder={''}
                dataKey='description'
                maxLength={2000}
                submitAction={submitSyndicateData}>
                {
                  ({ value }) => {
                    return (
                      <SyndicateAbout
                        description={multilineTextToJSX(description)}
                        onFaqClick={this.toggleFaq} />
                    )
                  }
                }
              </TextEditContainer>
            }
            rightComponent={
              <div>
                <SyndicateInvolvement
                  benefits={syndicateBenefits}
                  description={syndicateBenefitsDescription(name)} />
                <div className='visible-md-up'>
                  <SyndicateCtaCard />
                </div>
              </div>
            } />
        </div>

        <div className='container no-padding'>
          <div className='col-md-8 col-sm-12 private-syndicate__team-members'>
            {/*}<HorseMemberCarousel
              syndicateMembers={syndicateMembers} />*/}
          </div>
        </div>

        <div className='private-syndicate__section'>
          <div className='container'>
            <div className='col-md-5 col-sm-12'>
              <TextEditContainer
                title='Edit benefits'
                data={data}
                editLabel='update benefits'
                dataKey='benefits'
                maxLength={2000}
                submitAction={submitSyndicateData}>
                {
                  ({ value }) => {
                    return (
                      <SyndicateBenefits />
                    )
                  }
                }
              </TextEditContainer>
            </div>
          </div>
        </div>

        <div className='private-syndicate__section-top'>
          <TextEditContainer
            title='Edit quote'
            data={data}
            editLabel='update quote'
            placeholder={'quote'}
            dataKey='horsesHeadline'
            maxLength={75}
            modifier='text-edit__big'
            submitAction={submitSyndicateData}>
            {
              ({ value }) => {
                return (
                  <HorseParallaxContent
                    title={horsesHeadline}
                    image={syndicateUpperHero.image}
                  />
                )
              }
            }
          </TextEditContainer>
        </div>

        <TextEditContainer
          title={`${name} horses`}
          editLabel='update horses'
          data={data}
          placeholder={''}
          dataKey='horsesText'
          maxLength={2000}
          submitAction={submitSyndicateData}
          buttonModifier='section'>
          {
            ({ value }) => {
              return (
                <div className='private-syndicate__overlay-section'>
                  <SyndicateIntroSection
                    title={`${name} horses`}
                    description={multilineTextToJSX(horsesText)}>
                    {horses && horses.length > 0 &&
                      <SyndicateHorseCarousel
                        horses={horses} />
                    }
                  </SyndicateIntroSection>
                </div>
              )
            }
          }
        </TextEditContainer>

        <div className='private-syndicate__section'>
          <div className='container'>
            <div className='col-md-5 col-sm-12'>
              <TextEditContainer
                title='Our heritage'
                editLabel='update heritage'
                data={data}
                placeholder={''}
                dataKey='heritage'
                maxLength={2000}
                submitAction={submitSyndicateData}>
                {
                  ({ value }) => {
                    return (
                      <SyndicateHeritageSection description={heritage} />
                    )
                  }
                }
              </TextEditContainer>
            </div>
          </div>
        </div>

        <div className='private-syndicate__section-top'>
          <TextEditContainer
            title='Edit quote'
            data={data}
            editLabel='update quote'
            placeholder={'quote'}
            dataKey='trainersHeadline'
            maxLength={75}
            modifier='text-edit__big'
            submitAction={submitSyndicateData}>
            {
              ({ value }) => {
                return (
                  <HorseParallaxContent
                    title={trainersHeadline}
                    image={syndicateLowerHero.image}
                  />
                )
              }
            }
          </TextEditContainer>
        </div>

        <TextEditContainer
          title='our trainers'
          editLabel='update trainers'
          data={data}
          placeholder={''}
          dataKey='trainersText'
          maxLength={2000}
          submitAction={submitSyndicateData}
          buttonModifier='section'>
          {
            ({ value }) => {
              return (
                <div className='private-syndicate__overlay-section'>
                  <SyndicateIntroSection
                    modifier='small'
                    title='our trainers'
                    description={trainersText}>
                      {/*<HorseMemberCarousel
                        syndicateMembers={trainerMembers}
                        type='trainer' />*/}
                  </SyndicateIntroSection>
                </div>
              )
            }
          }
        </TextEditContainer>

        <div className='private-syndicate__section'>
          <div className='container'>
            <TitleDescriptionSection
              colorModifier='blue'
              title='syndicate news'>
              <FeedGallery
                tiles={messages} />
            </TitleDescriptionSection>
          </div>
        </div>

        {/* Edit section
        <Route exact path='/syndicate/:name/edit' render={() => {
          return (
            <div className='public-syndicate__section' id='faqs'>
              <FullWidthSplitSection
                modifier='white'
                leftComponent={(
                  <div className='col-xs-12 col-md-8 public-syndicate__faqs'>
                    <SyndicateFaqs faqs={faqs} />
                  </div>
                )}
                rightComponent={(
                  <FormSubmissionEditContainer>
                    {
                      (formSubmissionProps) => {
                        return (
                          <div className='public-syndicate__contact-form'>
                            <ContactForm
                              values={EMPTY_OBJ} // Prevent re-render
                              errors={EMPTY_OBJ}
                              validators={NOOP}
                              update={NOOP}
                              updateErrors={NOOP}
                              submitForm={NOOP}
                              description='Any queries? Leave your message and somebody from the syndicate will get back to you as soon as possible.' />
                          </div>
                        )
                      }
                    }
                  </FormSubmissionEditContainer>
                )}/>
            </div>
          )
        }} />
        {*/}

        <SyndicateFaqPopup
          breadcrumbText={'Back to syndicate page'}
          onClick={this.toggleFaq}
          isOpen={openFaq}
          faqs={faqs} />
      </div>
    )
  }
}

export default SyndicateView(SyndicateOverview)
