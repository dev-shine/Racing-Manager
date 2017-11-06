import {
  syndicateUpperImage,
  syndicateLowerImage
} from 'assets/dummyassets'

import capitalize from 'utils/capitalize'

export const syndicateUpperHero = {
  title: `Europe's leading racehorse ownership company`,
  image: syndicateUpperImage
}

export const syndicateLowerHero = {
  title: 'Delivering the highest level of personal service',
  image: syndicateLowerImage
}

export const description = 'We put together small groups of people to share in a number of top quality racehorses in order to experience racing at the highest level in the UK and around the world. Highclere Thoroughbred Racing takes its name from Highclere Castle, Harry Herbert’s ancestral home and the location of Highclere Stud where we hold our annual Yearling Parade. We treat each owner as if he or she own their horses outright. We keep our owners fully up to date with every aspect of their bloodstock’s progress from training yard to racetrack. The number of shares available per syndicate varies between ten and twenty. The number of horses, purchased by John Warren and trained by the country’s top trainers, also varies in each syndicate.'

export const benefits = [
  'Pro rata prize money share',
  'Pro rata share of resale proceeds',
  'Regular yard visits',
  'Personalised messages and clips from the team',
  'Live content from the races',
]

export const benefitsDescription = (name = '') => {
  return `${capitalize(name)} aims to offer a unique taste of racehorse ownership. Regular communication ensures that you are kept fully up-to-date with all the latest news.`
}

export const faqs = [
  {
    question: 'Are shares sold with VAT?',
    answer: 'Horses up to the end of their racing season, including all vets bills, entry fees'
  },
  {
    question: 'What does the price of a share include?',
    answer: `The share price covers all expenses including the purchase & training of the horses up to the end of their racing season, including all vets bills, entry fees, transport, owners badge for race days & stable visits. A smaller additional sum, which is clearly stated on the Terms & Conditions is due for the second & consecutive year after that for training fees & racing costs etc.`
  },
  {
    question: 'What happens on raceday?',
    answer: 'A smaller additional sum, which is clearly stated on the Terms & Conditions is'
  },
  {
    question: 'What are the types of payment you accept?',
    answer: 'Due for the second & consecutive year after that for training fees & costs '
  },
  {
    question: `I'm a part of a rival syndicate, can I still join?`,
    answer: 'Including all vets bills, entry fees, transport, owners badge for race days & visits.'
  }
]

export const onboardingDescription = 'Lorem ipsum dolor consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad'

export const onboardingOptionDescription = 'A partnership is a great option for those wanting to be more hands-on than members of a racing club, but in a more affordable way. A tried and tested method is to own a `leg` with three other people.'
