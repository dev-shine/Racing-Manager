import React from 'react'

import PropTypes from 'prop-types'

import classNames from 'utils/classnames'

import TextArea from 'components/input/TextArea'

import EditOverlay from 'components/manageredit/EditOverlay'

const QuoteEdit = (props) => {
  const {
    className,
    text,
    placeholder,
    maxLength,
    handleChange
  } = props

  const modifiedClassNames = classNames('quote-edit', className)

  return (
    <div className={modifiedClassNames}>
      <TextArea
        handleChange={handleChange}
        maxLength={maxLength}
        showBar
        placeholder={placeholder}
        className='quote-edit__text'
        name='quite-edit-text'
        value={text} />
      <div className='quote-edit__char-count'>
        <h6 className='extra-light'>
          Max {maxLength} characters
        </h6>
      </div>
    </div>
  )
}

QuoteEdit.propTypes = {
  text: PropTypes.string,
  placeholder: PropTypes.string,
  maxLength: PropTypes.number,
  handleChange: PropTypes.func
}

QuoteEdit.defaultProps = {
  text: '',
  maxLength: 75,
  placeholder: ''
}

export default EditOverlay(QuoteEdit)
