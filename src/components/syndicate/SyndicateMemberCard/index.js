import React from 'react'

import PropTypes from 'prop-types'

const SyndicateMemberCard = (props) => {
  const {
    firstName,
    surname,
    addressLine1,
    addressLine2,
    postcode
  } = props.AddMemberFormInfo.values

  return (
    <div className="syndicate-member-card">
      <div className="card-content">
        <div className="card-text first-surname">
          <h3>{firstName.toUpperCase()} {surname.toUpperCase()}</h3>
        </div>
        <div className="card-text address-line-1">
          <h6>{addressLine1.toUpperCase()}</h6>
        </div>
        <div className="card-text address-line-2">
          <h6>{addressLine2.toUpperCase()}</h6>
        </div>
        <div className="card-text postcode">
          <h6>{postcode.toUpperCase()}</h6>
        </div>
      </div>
      <div className="card-footer">
        <div className="card-btn"><a onClick={() => { props.deleteCard() }} className="del-btn"><h6>DELETE</h6></a></div>
        <div className="card-btn"><a onClick={() => { props.editCard() }} className="edit-btn"><h6>EDIT</h6></a></div>
      </div>
    </div>
  )
}

SyndicateMemberCard.propTypes = {
  firstName: PropTypes.string,
  surname: PropTypes.string,
  addressLine1: PropTypes.string,
  addressLine2: PropTypes.string,
  postcode: PropTypes.string
}

SyndicateMemberCard.defaultProps = {
  firstName: '',
  surname: '',
  addressLine1: '',
  addressLine2: '',
  postcode: ''
}

export default SyndicateMemberCard
