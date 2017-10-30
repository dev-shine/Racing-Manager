import React, { PureComponent } from 'react'

import TextButton from 'components/buttons/TextButton'

import Checkbox from 'components/input/Checkbox'

import {
  SaveMemberCheckboxDescription
} from 'data/syndicate'

class SyndicateSaveMemberForm extends PureComponent {
  constructor (props) {
    super(props)

    this.state = {
      checkbox1: false,
      checkbox2: false
    }
  }

  isCheckbox1 () {

    this.setState({
      checkbox1: !(this.state.checkbox1)
    })
  }

  isCheckbox2 () {
    this.setState({
      checkbox2: !(this.state.checkbox2)
    })
  }

  render () {
    return (
      <div>
        <div className="checkbox-content">
          <Checkbox
            label='I confirm all the information provided is accurate'
            value={this.state.checkbox1}
            handleChange={() => { this.isCheckbox1() }}
            name='checkbox1' />
          <Checkbox
            label={SaveMemberCheckboxDescription}
            value={this.state.checkbox2}
            handleChange={() => { this.isCheckbox2() }}
            name='checkbox2' />
        </div>
        <TextButton
          onClick={() => {}}
          modifier={['fluid']}
          isDisabled={!this.state.checkbox1 || !this.state.checkbox2}
          text='SAVE THE TEAM' />
      </div>
    )
  }
}

export default SyndicateSaveMemberForm
