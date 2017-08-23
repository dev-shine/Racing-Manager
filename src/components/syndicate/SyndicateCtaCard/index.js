import React from 'react'

import PropTypes from 'prop-types'

import CtaPanelCard from 'components/cards/CtaPanelCard'

import TextButton from 'components/buttons/TextButton'
import CtaLink from 'components/links/CtaLink'

const SyndicateCtaCard = (props) => {
  const {
    topButtonText,
    bottomButtonText
  } = props

  return (
   <CtaPanelCard className='syndicate-cta-card'>
      <CtaLink href={'/'} target={'_blank'} nativeLink>
          <TextButton
            text={topButtonText}
            className='syndicate-cta-card__button'
            modifier='md'
          />
        </CtaLink>

        <CtaLink href='/'>
          <TextButton
            text={bottomButtonText}
            className='syndicate-cta-card__button'
            modifier={['md', 'secondary']}
          />
        </CtaLink>
    </CtaPanelCard>
  )
}

SyndicateCtaCard.propTypes = {
  topButtonText: PropTypes.string,
  bottomButtonText: PropTypes.string
}

SyndicateCtaCard.defaultProps = {
  topButtonText: 'request to join a horse',
  bottomButtonText: 'get in touch'
}

export default SyndicateCtaCard
