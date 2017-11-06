import React, { Component } from 'react'

import HorseEditor from 'components/input/Input'

import {
  CardView,
  CardFrame,
  SpecCardFrame,
  CardHeading
} from 'components/cards/FeaturedCard'

class HorseNameEditor extends Component {
  constructor (props) {
    super(props)

    this.horseNameEdit = this.horseNameEdit.bind(this)
  }

  horseNameEdit (value) {
    let horseNum = []
    for (var i = 1; i <= value; i++) {
      horseNum.push(
        <div className="horse-name">
          <CardView>
            <SpecCardFrame>
              <CardHeading>
                <HorseEditor
                  placeholder="HORSE NAME"/>
              </CardHeading>
            </SpecCardFrame>
          </CardView>
        </div>
      )
    }
    return horseNum
  }

  render () {
    const horseNameEdit = this.horseNameEdit(this.props.horseCount)

    return (
      <div className="horse-name-card">
        { horseNameEdit }
      </div>
    )

  }
}

export default HorseNameEditor
