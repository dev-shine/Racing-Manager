import React from 'react'
import { Link } from 'react-router-dom'
import Separator from 'components/gui/Separator'

const HorseAboutInfo = () => {
  return (
    <div className='horse-about'>
      <h1 className='horse-header__medium-title'>
        About the horse
      </h1>
      <Separator modifier='white' />
      <p className='horse-header__paragraph'>
        Tobefair (9-1) took his winning streak to six with his best performance to date in the Pertemps Network Handicap Hurdle (Series Qualifier) at Warwick. Debra Hamer's seven-year-old started his rich vein of form with three victories in the summer of 2015 and was striking for the third time this term.
      </p>
      <Link to='/' className='link--italic horse-header__read-more'>
        Read more...
      </Link>
      <div className='horse-header__small-title horse-header__comment-title'>
        Timeform comment
      </div>
      <p className='horse-header__paragraph'>
        Jumps: sturdy gelding: useful handicap hurdler: won all 3 starts in 2015/16 and at Ffos Las in November, Chepstow in December, Warwick in January and Newbury (by 1½ lengths from Morello Royale) in February: 10/1, well below form in 24-runner Pertemps Final at Cheltenham last time: stays 3¼m: acts on soft and good to firm going: has worn cheekpieces, including latest start: often races towards rear, sometimes idles.
      </p>
      <Link to='/' className='link--italic horse-header__read-more'>
        Read more...
      </Link>
    </div>
  )
}

export default HorseAboutInfo
