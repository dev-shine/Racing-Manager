import React, { Component } from 'react'
import { showEditOptions } from 'utils/managerutils'

import HorseCard from 'components/horse/HorseCard'
import ImageEdit from 'components/manageredit/ImageEdit'
import { constructStaticUrl } from 'utils/horseutils'
import EditButton from 'components/manageredit/EditButton'

class CardImageEdit extends Component {
  constructor (props) {
    super(props)

    this.state = {
      showEdit: false
    }

    this.showEditPopup = this.showEditPopup.bind(this)
    this.hideEditPopup = this.hideEditPopup.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  showEditPopup () {
    this.setState({showEdit: true})
  }

  hideEditPopup () {
    this.setState({showEdit: false})
  }

  handleChange (data) {
    this.props.handleChange(data)
    this.hideEditPopup()
  }

  render () {
    if (!showEditOptions()) {
      return null
    }

    const {
      showEdit
    } = this.state

    const {
      data,
      editLabel,
      title,
      description
    } = this.props

    const {
      cost,
      syndicate,
      owner
    } = data

    return (
      <div className='card-image-edit'>
        <ImageEdit
          isOpen={showEdit}
          title={title}
          description={description}
          handleChange={this.handleChange}
          onCancel={this.hideEditPopup}
          canSave={false}
        />
        <EditButton
          onClick={this.showEditPopup}
          title={editLabel}
          position='absolute'
          iconModifier='update'
        />
        <HorseCard
          isActive={true}
          src={constructStaticUrl(data.thumbnailImage)}
          title={data.name}
          color={data.syndColor}
          subtitle={`${data.age}yo ${data.gender}`}
          stats={[{
            name: 'runs',
            value: data.runs
          }, {
            name: 'wins',
            value: data.wins
          }, {
            name: 'places',
            value: data.places
          }, {
            name: 'OR',
            value: '-'
          }]}
          info={[{
            name: 'Trainer name',
            value: data.trainer && data.trainer.name
          }, {
            name: 'Syndicate name',
            value: syndicate ? syndicate.name : owner.name
          }, {
            name: 'Initial cost/share',
            value: cost ? cost.initial ? cost.initial : '-' : '-'
          }, {
            name: 'Monthly cost/share',
            value: cost ? cost.monthly ? cost.monthly : '-' : '-'
          }]}
          isMember={false}
          bottomUrl={null}
          className='horse-card-gallery__card'
        />
      </div>
    )
  }
}

export default CardImageEdit
