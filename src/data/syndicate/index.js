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
