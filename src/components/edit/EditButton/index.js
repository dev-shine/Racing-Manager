import React from 'react'

import TextIconButton from 'components/buttons/TextIconButton'

import classNames from 'utils/classnames'

const EditButton = (props) => {
  const {
    className,
    ...rest
  } = props

  const modifiedClassNames = classNames('edit-button', className)

  return (
    <TextIconButton
      className={modifiedClassNames}
      {...rest} />
  )
}

export default EditButton
