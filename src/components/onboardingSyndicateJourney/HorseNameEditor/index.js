import React, { Component } from 'react'

import AutoComplete from 'react-autocomplete'

import {
  CardView,
  SpecCardFrame,
  CardHeading
} from 'components/cards/FeaturedCard'

class HorseNameEditor extends Component {
  constructor (props) {
    super(props)

    this.state = {
      value: ''
    }

    this.changeValue = this.changeValue.bind(this)
    this.onFocus = this.onFocus.bind(this)
    this.onHorseNameClick = this.onHorseNameClick.bind(this)
    this.selectHorseName = this.selectHorseName.bind(this)
  }

  changeValue (value) {
    this.setState({ value: value }, function () {
      this.props.selectHorseNameEditor(this.state.value)
    })
  }

  onFocus () {
    this.props.onClickHorse(this.props.datakey)
  }



  onHorseNameClick () {
    this.props.onClickHorse(this.props.datakey)
  }

  selectHorseName (value) {
    this.setState({value: value}, function () {
      this.props.selectHorseName(this.state.value)
    })
  }

  render () {

    return (
      <div className="horse-name-card" onClick={this.onHorseNameClick}>
        <div className="horse-name">
          <CardView>
            <SpecCardFrame>
              <CardHeading>
                <AutoComplete
                  placeholder="Enter a horse name"
                  getItemValue={(item) => item.label}
                  items={[
                    { label: 'apple' },
                    { label: 'banana' },
                    { label: 'cherry' }
                  ]}
                  renderItem={(item, isHighlighted) =>
                    <div style={{background: isHighlighted ? '#eee' : 'transparent'}}>
                      {item.label}
                    </div>
                  }
                  value={this.state.value}
                  onChange={(e) => { this.changeValue(e.currentTarget.value) }}
                  inputProps={{
                    onFocus: this.onFocus
                  }}
                  onSelect={(value) => { this.selectHorseName(value) }}
                />
              </CardHeading>
            </SpecCardFrame>
          </CardView>
        </div>
      </div>
    )

  }
}

export default HorseNameEditor
